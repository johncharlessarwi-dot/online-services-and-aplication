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

## Deployment to Production

### Prerequisites
- GitHub account
- Render account (for backend)
- Netlify account (for frontend)
- Domain name (optional, for custom URL)

### Step 1: Push Code to GitHub
```bash
# Initialize Git (if not done)
git init
git add .
git commit -m "Initial commit"

# Create GitHub repo at https://github.com/new
# Then push
git remote add origin https://github.com/YOUR_USERNAME/john-online-services.git
git push -u origin main
```

### Step 2: Deploy Backend to Render
1. Go to https://render.com and sign up/login
2. Click "New" > "Web Service"
3. Connect your GitHub repo
4. Set build settings:
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Add environment variable: `MONGO_URI` (get from MongoDB Atlas)
5. Deploy - you'll get a URL like `https://your-app.onrender.com`

### Step 3: Deploy Frontend to Netlify
1. Go to https://netlify.com and sign up/login
2. Click "Add new site" > "Import an existing project"
3. Connect GitHub repo
4. Set build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `build`
   - Add environment variable: `REACT_APP_API_URL=https://your-backend-url.onrender.com/api`
5. Deploy - you'll get a URL like `https://your-site.netlify.app`

### Step 4: Set Up Domain (Optional)
1. Buy domain from Namecheap/GoDaddy
2. Point domain to Netlify site
3. Add custom domain in Netlify settings

### Step 5: SEO Optimization
Add to `frontend/public/index.html`:
```html
<meta name="description" content="John Online Services - AI-powered admission prediction system">
<meta name="keywords" content="admission prediction, AI eligibility checker, university admission">
```

Submit to Google Search Console for indexing.

## Business Model

See `docs/business-plan.md` for complete monetization strategy including:
- Revenue streams
- Pricing tiers
- Payment integration
- Growth strategies