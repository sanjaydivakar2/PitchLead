# PitchLead - High-Signal B2B Stories in 3 Minutes

> The QVC for B2B - where brands showcase their expertise and buyers find solutions.

PitchLead is a B2B video platform featuring 3-minute micro-webinars with horizontal carousel discovery and vertical player experience. Built-in AI helps brands define identity, content pillars, and auto-draft scripts tailored by industry, market, specialization, and product.

## 🚀 Features

- **3-Minute Format**: Optimized for B2B attention spans
- **Horizontal Discovery**: Curated rails by industry, trending, and new content
- **Vertical Player**: Immersive viewing experience with persistent CTAs
- **AI-Powered Content**: Auto-generated scripts, transcripts, and SEO optimization
- **Built-in CTAs**: Book demos, download assets, message brands directly
- **Analytics**: Comprehensive tracking for creators and viewers
- **Multi-tenant**: Organization management with role-based access

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Authentication**: Auth0
- **Video**: Mux (HLS streaming)
- **Search**: Algolia
- **Payments**: Stripe
- **State Management**: React Query + Zustand
- **Deployment**: Vercel
- **Monitoring**: Sentry + Datadog + Mixpanel

## 🏗️ Project Structure

```
apps/web/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Public marketing pages
│   ├── (app)/            # Authenticated app pages
│   └── api/              # API routes
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Layout components
│   ├── marketing/       # Marketing page components
│   └── app/             # App-specific components
├── lib/                 # Utility libraries
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Auth0 account
- Mux account (for video)
- Stripe account (for billing)
- Algolia account (for search)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/pitchlead.git
   cd pitchlead
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your environment variables in `.env.local`

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Environment Variables

See `.env.example` for all required environment variables. Key configurations:

- **Auth0**: Authentication and user management
- **Mux**: Video upload, processing, and streaming
- **Stripe**: Subscription billing and payments
- **Algolia**: Search and discovery
- **Sentry**: Error tracking and monitoring

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run e2e

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📦 Deployment

The application is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Performance Targets

- **LCP**: < 2.5s (p75)
- **CLS**: < 0.1
- **INP**: < 200ms
- **Lighthouse PWA**: ≥ 90

## 🎯 Success Metrics

- **Activation**: ≥60% of new orgs publish a video within 7 days
- **Engagement**: Median watch-through ≥55% for top 25% of videos
- **Growth**: 20% MoM indexed public pages
- **Reliability**: 99.9% uptime

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Commit Convention

We use [Conventional Commits](https://conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Maintenance tasks

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For support, email support@pitchlead.com or join our Slack channel.

---

Built with ❤️ by the PitchLead team

