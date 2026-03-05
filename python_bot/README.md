# Python Blackjack Bot API

This folder contains a full Python bot service for the calculator blackjack mode.

## Features

- FastAPI server with CORS enabled
- Decision endpoint: `POST /bot/decision`
- Explain endpoint: `POST /bot/explain`
- Hybrid strategy:
  - basic strategy heuristics
  - Monte Carlo EV simulation for `hit`, `stand`, `double`

## Run locally

```bash
cd python_bot
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python blackjack_bot_api.py
```

Server starts at `http://127.0.0.1:8000`.

## Frontend integration

The Next.js hook calls:

- `http://127.0.0.1:8000/bot/decision` by default
- or `NEXT_PUBLIC_BLACKJACK_BOT_URL` if set

## Secret bot activation

In blackjack mode, placing a bet of **67** and pressing **Deal** enables bot mode.

## Example payload

```json
{
  "player_hand": [
    { "rank": "10", "suit": "♠" },
    { "rank": "6", "suit": "♦" }
  ],
  "dealer_upcard": { "rank": "9", "suit": "♥" },
  "can_double": true,
  "current_bet": 100,
  "balance": 900
}
```
