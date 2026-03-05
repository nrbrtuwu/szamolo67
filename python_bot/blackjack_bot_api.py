from __future__ import annotations

import random
from collections import Counter
from typing import Literal

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

Action = Literal["hit", "stand", "double"]
Suit = Literal["♠", "♥", "♦", "♣"]
Rank = Literal["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


class Card(BaseModel):
    rank: Rank
    suit: Suit


class DecisionRequest(BaseModel):
    player_hand: list[Card] = Field(min_length=2)
    dealer_upcard: Card
    can_double: bool = True
    current_bet: int = 0
    balance: int = 0


class DecisionResponse(BaseModel):
    action: Action
    confidence: float
    expected_value_hit: float
    expected_value_stand: float
    expected_value_double: float
    reason: str


class ExplainResponse(BaseModel):
    hand_type: Literal["hard", "soft", "pair"]
    player_total: int
    dealer_upcard_value: int
    recommendation: Action
    explanation: str


RANKS: list[Rank] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
SUITS: list[Suit] = ["♠", "♥", "♦", "♣"]


def card_value(rank: Rank) -> int:
    if rank == "A":
        return 11
    if rank in {"J", "Q", "K"}:
        return 10
    return int(rank)


def hand_total(cards: list[Card]) -> int:
    total = 0
    aces = 0
    for card in cards:
        if card.rank == "A":
            aces += 1
            total += 11
        elif card.rank in {"J", "Q", "K"}:
            total += 10
        else:
            total += int(card.rank)

    while total > 21 and aces > 0:
        total -= 10
        aces -= 1

    return total


def is_soft_hand(cards: list[Card]) -> bool:
    total = 0
    aces = 0
    for card in cards:
        if card.rank == "A":
            aces += 1
            total += 11
        elif card.rank in {"J", "Q", "K"}:
            total += 10
        else:
            total += int(card.rank)

    return aces > 0 and total <= 21


def dealer_up_value(card: Card) -> int:
    return 11 if card.rank == "A" else card_value(card.rank)


def build_infinite_shoe() -> list[Card]:
    return [Card(rank=rank, suit=suit) for suit in SUITS for rank in RANKS] * 8


def draw_random(shoe: list[Card], rng: random.Random) -> Card:
    return shoe[rng.randrange(0, len(shoe))]


def dealer_play(dealer_cards: list[Card], shoe: list[Card], rng: random.Random) -> int:
    cards = dealer_cards[:]
    while hand_total(cards) < 17:
        cards.append(draw_random(shoe, rng))
    return hand_total(cards)


def settle_round(player_total: int, dealer_total: int) -> int:
    if player_total > 21:
        return -1
    if dealer_total > 21:
        return 1
    if player_total > dealer_total:
        return 1
    if player_total < dealer_total:
        return -1
    return 0


def basic_strategy_action(player_hand: list[Card], dealer_up: Card, can_double: bool) -> Action:
    dealer = dealer_up_value(dealer_up)
    total = hand_total(player_hand)

    if len(player_hand) == 2 and player_hand[0].rank == player_hand[1].rank:
        pair_rank = player_hand[0].rank
        if pair_rank in {"A", "8"}:
            return "double" if can_double and pair_rank == "A" and dealer in {5, 6} else "hit"
        if pair_rank in {"10", "J", "Q", "K"}:
            return "stand"
        if pair_rank == "9":
            return "stand" if dealer in {2, 3, 4, 5, 6, 8, 9} else "hit"
        if pair_rank == "7":
            return "hit" if dealer >= 8 else "double" if can_double and dealer in {3, 4, 5, 6} else "hit"
        if pair_rank == "6":
            return "double" if can_double and dealer in {3, 4, 5, 6} else "hit"
        if pair_rank == "5":
            if can_double and dealer in {2, 3, 4, 5, 6, 7, 8, 9}:
                return "double"
            return "hit"
        if pair_rank == "4":
            return "double" if can_double and dealer in {5, 6} else "hit"
        if pair_rank in {"2", "3"}:
            return "double" if can_double and dealer in {4, 5, 6, 7} else "hit"

    if is_soft_hand(player_hand):
        if total >= 20:
            return "stand"
        if total == 19:
            return "double" if can_double and dealer == 6 else "stand"
        if total == 18:
            if dealer in {2, 7, 8}:
                return "stand"
            if dealer in {3, 4, 5, 6} and can_double:
                return "double"
            return "hit"
        if total == 17:
            return "double" if can_double and dealer in {3, 4, 5, 6} else "hit"
        if total in {15, 16}:
            return "double" if can_double and dealer in {4, 5, 6} else "hit"
        if total in {13, 14}:
            return "double" if can_double and dealer in {5, 6} else "hit"

    if total >= 17:
        return "stand"
    if total <= 8:
        return "hit"
    if total == 9:
        return "double" if can_double and dealer in {3, 4, 5, 6} else "hit"
    if total == 10:
        return "double" if can_double and dealer in {2, 3, 4, 5, 6, 7, 8, 9} else "hit"
    if total == 11:
        return "double" if can_double and dealer != 11 else "hit"
    if total == 12:
        return "stand" if dealer in {4, 5, 6} else "hit"
    if total in {13, 14, 15, 16}:
        return "stand" if dealer in {2, 3, 4, 5, 6} else "hit"

    return "hit"


def simulate_action_ev(
    player_hand: list[Card],
    dealer_up: Card,
    action: Action,
    *,
    simulations: int = 1600,
    can_double: bool,
    seed: int = 42,
) -> float:
    rng = random.Random(seed)
    shoe = build_infinite_shoe()
    total_return = 0.0

    for _ in range(simulations):
        dealer_hidden = draw_random(shoe, rng)
        dealer_cards = [dealer_hidden, dealer_up]
        player_cards = player_hand[:]

        if action == "double" and can_double and len(player_cards) == 2:
            player_cards.append(draw_random(shoe, rng))
            player_total = hand_total(player_cards)
            dealer_total = dealer_play(dealer_cards, shoe, rng)
            total_return += settle_round(player_total, dealer_total) * 2
            continue

        if action == "stand":
            player_total = hand_total(player_cards)
            dealer_total = dealer_play(dealer_cards, shoe, rng)
            total_return += settle_round(player_total, dealer_total)
            continue

        player_cards.append(draw_random(shoe, rng))
        while True:
            player_total = hand_total(player_cards)
            if player_total > 21:
                total_return -= 1
                break

            follow_up = basic_strategy_action(player_cards, dealer_up, can_double=False)
            if follow_up == "stand":
                dealer_total = dealer_play(dealer_cards, shoe, rng)
                total_return += settle_round(player_total, dealer_total)
                break

            player_cards.append(draw_random(shoe, rng))

    return total_return / simulations


def choose_best_action(req: DecisionRequest) -> tuple[Action, float, float, float, str]:
    hit_ev = simulate_action_ev(
        req.player_hand,
        req.dealer_upcard,
        "hit",
        can_double=req.can_double,
        seed=101,
    )
    stand_ev = simulate_action_ev(
        req.player_hand,
        req.dealer_upcard,
        "stand",
        can_double=req.can_double,
        seed=202,
    )
    double_ev = simulate_action_ev(
        req.player_hand,
        req.dealer_upcard,
        "double",
        can_double=req.can_double,
        seed=303,
    )

    evs: dict[Action, float] = {
        "hit": hit_ev,
        "stand": stand_ev,
        "double": double_ev if req.can_double and len(req.player_hand) == 2 else -999.0,
    }

    action = max(evs, key=evs.get)
    sorted_evs = sorted(evs.items(), key=lambda item: item[1], reverse=True)
    confidence = max(0.01, sorted_evs[0][1] - sorted_evs[1][1])

    reason = (
        f"Best EV is '{action}' with {evs[action]:.4f}. "
        f"Dealer upcard value: {dealer_up_value(req.dealer_upcard)}. "
        f"Player total: {hand_total(req.player_hand)}."
    )

    return action, hit_ev, stand_ev, double_ev, reason


def describe_hand(req: DecisionRequest, recommendation: Action) -> ExplainResponse:
    total = hand_total(req.player_hand)
    dealer_value = dealer_up_value(req.dealer_upcard)

    if len(req.player_hand) == 2 and req.player_hand[0].rank == req.player_hand[1].rank:
        hand_type: Literal["hard", "soft", "pair"] = "pair"
        explanation = "Pair detected; strategy blends split-table behavior into hit/stand/double actions."
    elif is_soft_hand(req.player_hand):
        hand_type = "soft"
        explanation = "Soft hand (usable Ace): bot tolerates more aggression because bust risk is lower."
    else:
        hand_type = "hard"
        explanation = "Hard hand: bot follows dealer-upcard pressure and avoids unnecessary bust risk."

    explanation += f" Recommendation: {recommendation.upper()} against dealer {dealer_value}."

    return ExplainResponse(
        hand_type=hand_type,
        player_total=total,
        dealer_upcard_value=dealer_value,
        recommendation=recommendation,
        explanation=explanation,
    )


app = FastAPI(title="Blackjack Python Bot", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "blackjack-bot-python"}


@app.post("/bot/decision", response_model=DecisionResponse)
def bot_decision(req: DecisionRequest) -> DecisionResponse:
    action, hit_ev, stand_ev, double_ev, reason = choose_best_action(req)

    ev_counter = Counter({
        "hit": hit_ev,
        "stand": stand_ev,
        "double": double_ev if req.can_double and len(req.player_hand) == 2 else -999.0,
    })
    best = ev_counter.most_common(2)
    confidence = abs(best[0][1] - best[1][1]) if len(best) > 1 else 1.0

    return DecisionResponse(
        action=action,
        confidence=round(confidence, 4),
        expected_value_hit=round(hit_ev, 5),
        expected_value_stand=round(stand_ev, 5),
        expected_value_double=round(double_ev, 5),
        reason=reason,
    )


@app.post("/bot/explain", response_model=ExplainResponse)
def bot_explain(req: DecisionRequest) -> ExplainResponse:
    action, _, _, _, _ = choose_best_action(req)
    return describe_hand(req, action)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("blackjack_bot_api:app", host="127.0.0.1", port=8000, reload=True)
