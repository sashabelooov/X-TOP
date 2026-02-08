# CLAUDE.md - AI Assistant Guide for X-TOP Frontend

## Project Overview

X-TOP is an AI-powered e-commerce platform for trading slow-moving inventory ("frozen goods") from retail stores. Built as a React + TypeScript SPA with Vite.

- **Language**: Uzbek (UI text)
- **License**: MIT

## Tech Stack

- **Framework**: React 19.2.0 with TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.13.0
- **Icons**: Lucide React
- **State**: React Context API + localStorage for auth
- **Styling**: Component-scoped CSS files

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # TypeScript check + production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── api/           # API clients (authApi.ts)
├── components/    # Reusable React components
├── context/       # React Context providers (AuthContext)
├── pages/         # Page components (route views)
├── assets/        # Static assets
├── App.tsx        # Main app with routing
├── main.tsx       # Entry point
└── index.css      # Global styles
```

## Key Files

- `src/main.tsx` - App entry point (StrictMode → BrowserRouter → AuthProvider)
- `src/App.tsx` - Route configuration
- `src/context/AuthContext.tsx` - Auth state management
- `src/api/authApi.ts` - Backend API integration
- `src/components/MainLayout.tsx` - Page layout wrapper

## Routes

| Path | Component | Layout |
|------|-----------|--------|
| `/` | HomePage | MainLayout |
| `/category` | CategoryPage | MainLayout |
| `/category/:slug` | CategoryPage | MainLayout |
| `/product/:id` | ProductDetailPage | MainLayout |
| `/payment` | PaymentPage | MainLayout |
| `/about` | AboutPage | MainLayout |
| `/login` | LoginPage | None |
| `/register` | RegisterPage | None |
| `/forgot-password` | ForgotPasswordPage | None |
| `/reset-password` | ResetPasswordPage | None |

## Coding Conventions

### File Organization
- Use barrel exports (`index.ts`) for components and pages
- Component-scoped CSS: `ComponentName.tsx` + `ComponentName.css`
- One component per file

### TypeScript
- Strict mode enabled - no implicit any
- Define interfaces for all props (e.g., `ProductCardProps`)
- Type API responses and requests
- Use `useAuth()` hook for auth context (throws if used outside provider)

### React Patterns
- Functional components only
- Use hooks: `useState`, `useEffect`, `useRef`, `useContext`
- Early returns for conditional rendering
- Arrow function components

### Naming
- **Components**: PascalCase (`ProductCard.tsx`)
- **Functions/variables**: camelCase
- **CSS classes**: kebab-case (`product-card`, `nav-container`)

### Styling
- CSS scoped to components
- Flexbox and Grid layouts
- Prices formatted in Uzbek Soum (`so'm`)

## API Integration

- Base URL configured in `src/api/authApi.ts`
- Uses Fetch API with Bearer token auth
- Tokens stored in localStorage
- All requests include ngrok bypass header

## Authentication Flow

1. On app load: AuthContext checks localStorage for tokens
2. Login: POST to `/auth/login` → store tokens → fetch profile
3. Logout: Clear tokens and user state
4. Use `useAuth()` hook to access: `user`, `isAuthenticated`, `isLoading`, `login()`, `logout()`, `register()`

## Important Notes

- No testing framework currently configured
- Product data is currently mocked in HomePage
- Backend API uses ngrok tunnel (development)
- React 19 with new JSX transform (no React import needed)

## When Making Changes

1. Follow existing patterns in similar files
2. Add TypeScript types for new props/data
3. Create component-scoped CSS for new components
4. Export new components/pages from barrel files (`index.ts`)
5. Run `npm run lint` before committing
6. Test auth flows if modifying AuthContext
