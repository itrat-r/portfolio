# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Database**: MongoDB with Mongoose
- **Email**: Nodemailer with SMTP
- **Testing**: Jest + React Testing Library + Playwright

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- MongoDB (optional, for database features)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment example file:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your configuration (optional for development).

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run test:e2e:ui` - Run E2E tests with UI

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── profile/       # Profile data endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── data/                  # Static data
├── lib/                   # Utilities (MongoDB, email)
├── store/                 # Redux store
└── types/                 # TypeScript types
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP server port |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `CONTACT_EMAIL` | Email for contact form submissions |

## Deployment

The project is configured for deployment on Vercel. Push to the `main` branch to trigger automatic deployment.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## License

MIT
