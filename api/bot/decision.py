from __future__ import annotations

from collections import Counter

from fastapi import FastAPI

from python_bot.blackjack_bot_api import (
    DecisionRequest,
    DecisionResponse,
    choose_best_action,
)

app = FastAPI(title="Blackjack Bot Function", version="1.0.0")


@app.get("/api/bot/decision")
def bot_decision_get() -> dict[str, str]:
    return {
        "status": "ok",
        "endpoint": "/api/bot/decision",
        "method": "POST",
    }


@app.post("/api/bot/decision", response_model=DecisionResponse)
def bot_decision(req: DecisionRequest) -> DecisionResponse:
    action, hit_ev, stand_ev, double_ev, reason = choose_best_action(req)

    ev_counter = Counter(
        {
            "hit": hit_ev,
            "stand": stand_ev,
            "double": double_ev if req.can_double and len(req.player_hand) == 2 else -999.0,
        }
    )
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
