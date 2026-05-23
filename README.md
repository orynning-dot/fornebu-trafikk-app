# 🚗 Fornebu Trafikk App

En moderne web-app for varsling om arrangementer på Unity Arena og trafikkmeldinger på Fornebu.

## ✨ Features

- 📅 **Arrangementer** - Henter live-data fra Ticketmaster
- 🚨 **Trafikkmeldinger** - Real-time trafikk fra Vegvesens API
- 🔔 **Push-varsler** - Få varsler direkte i nettleseren
- 📱 **Responsivt design** - Fungerer perfekt på mobil
- 🌙 **Dark theme** - Pen UI med mørkt tema

## 🚀 Quick Start

### Forutsetninger
- Node.js 18+
- npm/yarn
- Ticketmaster API-nøkkel (gratis på https://developer.ticketmaster.com)

### Setup

```bash
# 1. Klone repo
git clone https://github.com/orynning-dot/fornebu-trafikk-app
cd fornebu-trafikk-app

# 2. Installer dependencies
npm run install:all

# 3. Sett opp environment
cp backend/.env.example backend/.env
# Åpne backend/.env og legg inn Ticketmaster API-nøkkelen

# 4. Start prosjektet
npm run dev
```

Åpne **http://localhost:5173** i nettleseren din!

## 📁 Struktur

```
fornebu-trafikk-app/
├── frontend/                    # React + Vite
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── App.tsx            # Hovedkomponent
│   │   └── main.tsx           # Entry point
│   ├── public/
│   │   └── sw.js              # Service Worker
│   └── package.json
├── backend/                     # Express + Node.js
│   ├── src/
│   │   ├── services/
│   │   │   ├── ticketmaster.ts
│   │   │   ├── traffic.ts
│   │   │   └── scheduler.ts
│   │   └── index.ts           # Server
│   ├── .env.example
│   └── package.json
└── package.json               # Root monorepo
```

## 🔧 Development

### Frontend only
```bash
cd frontend && npm run dev
```

### Backend only
```bash
cd backend && npm run dev
```

### Both (from root)
```bash
npm run dev
```

## 📡 API Endpoints

- `GET /api/events` - Alle arrangementer
- `GET /api/traffic` - Alle trafikkmeldinger
- `GET /api/data` - Kombinert data
- `GET /health` - Health check

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- Tailwind CSS
- Vite

**Backend:**
- Express
- TypeScript
- Node-cron (scheduler)
- CORS

**APIs:**
- Ticketmaster Discovery API
- Vegvesen Traffic API

## 📝 Environment Variables

```env
TICKETMASTER_API_KEY=your_key_here
NODE_ENV=development
PORT=3001
```

## 🚀 Deployment

### Vercel (Frontend)
```bash
npm run build:frontend
# Deploy the `frontend/dist` folder
```

### Heroku/Railway (Backend)
```bash
npm run build:backend
# Deploy backend with npm start
```

## 📱 PWA Support

Appen fungerer som PWA og kan installeres på mobil for offline-bruk og push-varsler.

## 🤝 Bidra

1. Fork prosjektet
2. Lag en feature branch (`git checkout -b feature/amazing-feature`)
3. Commit endringene (`git commit -m 'Add amazing feature'`)
4. Push til branch (`git push origin feature/amazing-feature`)
5. Åpne en Pull Request

## 📄 Lisens

MIT License - se LICENSE filen

## 👨‍💻 Forfatter

Opprettet for bruk ved Unity Arena, Fornebu

---

**Laget med ❤️ av Copilot**
