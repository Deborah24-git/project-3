# Shift Handover Log

A digital shift handover tool for mine sites. Outgoing shifts document production, equipment status, safety incidents, and critical notes for incoming shifts.

## Features

- **Shift Handover Form** — Date, shift type, supervisors, production summary, equipment checklist, safety incidents, critical notes, and confirmation
- **Handover Dashboard** — Overview with last handover summary, equipment snapshot, days without LTI counter, and pending maintenance
- **Handover History** — Searchable list with view details, edit (within 24h), and delete
- **Equipment Status Timeline** — Track when each equipment was marked Down/Limited across shifts
- **Print / PDF** — Print button on detail view with clean print styles
- **Dark / Light Mode** — Toggle in sidebar
- **User Authentication** — Login/register with demo account

## Setup

```bash
npm install
npm run dev
```

## Demo Account

- Username: `demo`
- Password: `demo123`

## Tech Stack

- React 19
- React Router v7
- Vite
- Context API (state management)
- localStorage (persistence)
