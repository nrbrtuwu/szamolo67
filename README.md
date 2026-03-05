# Tudományos Kalkulátor + Blackjack Bot (Next.js + Python)

Röviden: ez egy modern, témázható tudományos kalkulátor alkalmazás, amely tartalmaz
- normál kalkulátor módot,
- másodfokú egyenlet megoldó módot,
- rejtett blackjack mini-játékot,
- automata bot módot Python döntési logikával.

## Fő funkciók

- **Standard mód**: tudományos műveletek (sin, cos, tan, log, ln, zárójelek, memória gombok stb.).
- **Quadratic mód**: `ax² + bx + c = 0` megoldása valós/komplex gyökökkel.
- **Blackjack mód**: teljes körös játék (`Deal`, `Hit`, `Stand`, `Double`, tét, egyenleg).
- **Bot mód**: rejtett aktiválás után automatikus játék és körönkénti értesítések.
- **Téma + nyelv + egyedi stílus**: beállítások panelen módosítható, mentéssel.

## Rejtett aktiválások

- **Blackjack belépés**: standard módban írj be `21`, majd `=`.
- **Bot aktiválás**: blackjackben tétnek adj meg `67`-et, majd `Deal`.

## Projekt felépítése (röviden)

- `app/` – Next.js App Router oldalak és globális stílus.
- `components/` – UI komponensek (kalkulátor, blackjack panel, beállítások, toastok).
- `hooks/` – fő logikák (`use-calculator`, toast, mobil segédhookok).
- `lib/` – témák, fordítások, utilok, theme context.
- `api/bot/decision.py` – **integrált Vercel Python API endpoint** a bot döntéshez.
- `python_bot/` – külön Python bot implementáció (helyi/önálló futtatáshoz).

## Technológia

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind.
- **UI**: Radix alapú komponensek.
- **Bot API**: Python + FastAPI + Pydantic.

## Python rész (kiemelten fontos)

Ebben a projektben a bot **nem csak kliens oldali trükk**, hanem valódi Python döntési logikát használ:

- A Python bot fő implementációja: `python_bot/blackjack_bot_api.py`.
- A bot döntés EV-alapú (Expected Value) szimulációt és alapstratégia szabályokat is használ.
- A frontend minden bot-lépésnél HTTP hívással kér döntést (`hit` / `stand` / `double`).

### Mit csinál a Python kód?

- Kártyakéz kiértékelés (hard/soft kéz, ász kezelés).
- Dealer szimuláció és körkimenet számítás.
- Több akció Monte Carlo jellegű EV becslése.
- Legjobb akció kiválasztása confidence/indoklás mezőkkel.

### Miért jó ez tanári szempontból?

- A Python backend elkülönített logikai rétegként működik.
- Jól bemutatható az API-tervezés (`request`/`response` modellek Pydantic-kel).
- A bot döntések reprodukálható, tesztelhető logikán alapulnak.
- Nem csak UI projekt: van benne backend, algoritmika és deploy-kész API.

## Helyi futtatás

### 1) Függőségek telepítése

```bash
pnpm install
```

### 2) Fejlesztői szerver indítása

```bash
pnpm dev
```

Alapértelmezetten a frontend az integrált API-t hívja: `/api/bot/decision`.

### 3) Build / production ellenőrzés

```bash
pnpm build
pnpm start
```

## Fontos npm scriptek

- `pnpm dev` – fejlesztői szerver.
- `pnpm build` – production build.
- `pnpm start` – production indítás.
- `npm run bot:install` – Python bot függőségek telepítése (`python_bot/requirements.txt`).
- `npm run bot:run` – külön Python bot szerver futtatása lokálisan.

## Környezeti változók

- `NEXT_PUBLIC_BLACKJACK_BOT_URL` (opcionális):
	- ha nincs beállítva, az app a belső `/api/bot/decision` útvonalat használja,
	- ha beállítod, a frontend a megadott külső bot endpointot fogja hívni.

Példa:

```env
NEXT_PUBLIC_BLACKJACK_BOT_URL=https://your-bot-domain.com/bot/decision
```

## API röviden

### `POST /api/bot/decision`

Várható bemenet (példa):

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

Válasz lényege: `action` (`"hit" | "stand" | "double"`) + EV/konfidencia mezők.

## Opcionális: külön Python bot futtatása lokálisan

A `package.json` tartalmaz helper scripteket:

```bash
npm run bot:install
npm run bot:run
```

Kézi futtatás közvetlenül a Python mappából:

```bash
cd python_bot
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python blackjack_bot_api.py
```

Ha külső bot URL-t használsz, állítsd be:

- `NEXT_PUBLIC_BLACKJACK_BOT_URL`

Példa:

```env
NEXT_PUBLIC_BLACKJACK_BOT_URL=http://127.0.0.1:8000/bot/decision
```

## Vercel deploy (rövid)

1. Pushold a repót GitHub-ra.
2. Importáld Vercelbe mint Next.js projekt.
3. Deploy.

Az integrált Python endpoint (`api/bot/decision.py`) ugyanebben a projektben fut, ezért nincs kötelező külön bot szerver.

### Python Vercelen – fontos megjegyzés

- Vercelen a Python rész **serverless function** formában fut (nem folyamatos `uvicorn` processzként).
- Emiatt az integrált endpoint az `api/bot/decision.py` alatt van kialakítva.
- A külön `python_bot/` mappa továbbra is hasznos helyi fejlesztéshez és dokumentációhoz.

## Megjegyzés

- A `.next/` mappa build output, nem forrás.
- Bot szövegek (`Sigeon`/`Sigenon`) jelenleg vegyesen vannak a forrásban; ez külön tisztítható, ha szeretnéd.

## Gyors hibaelhárítás

- Ha a bot nem válaszol: nézd meg, hogy az endpoint elérhető-e (`/api/bot/decision`) és nincs-e CORS/proxy gond.
- Ha Python import hibát látsz VS Code-ban: válaszd ki a megfelelő Python interpretert (Pylance env mismatch gyakori).
- Ha deploy után más viselkedést látsz: ellenőrizd a Vercel Environment Variables értékeit és redeployolj.
