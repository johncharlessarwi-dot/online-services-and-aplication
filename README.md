# John Online Services

A full-stack application for AI-powered admission prediction with complete monetization system.

## Project Structure

- `backend/` - Node.js/Express server with MongoDB
- `frontend/` - React application
- `docs/` - Documentation and business plans
- `index.html` - Project homepage

## Features

### Core Features
- 🤖 AI Eligibility Checker (rule-based intelligence)
- 📊 Course suitability prediction
- 👨‍🎓 Student guidance system
- 💰 Full monetization system
- 💳 Payment integration (ClickPay)
- 📱 WhatsApp notifications
- 📈 Analytics dashboard

### Monetization System
- Application service fees
- Subscription plans (Basic, Premium, VIP)
- Commission tracking
- Auto billing system
- Payment reconciliation

## API Endpoints

### AI Services
- `POST /api/ai/check` - Check admission eligibility
- `POST /api/ai/admission` - Get admission probability percentage

### Payment & Subscriptions
- `POST /api/subscribe` - Activate user subscription
- `POST /api/webhook/clickpay` - Payment webhook handler

## Setup

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Usage

1. Open `index.html` in browser for project overview
2. Backend runs on http://localhost:5000
3. Frontend runs on http://localhost:3000
4. Use the AI checker to test admission predictions

## Business Model

See `docs/business-plan.md` for complete monetization strategy including:
- Revenue streams
- Pricing tiers
- Payment integration
- Growth strategies