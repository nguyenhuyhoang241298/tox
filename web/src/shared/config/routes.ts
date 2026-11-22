/**
 * App routes. Most features are not built yet: their paths render the coming-soon page
 * (src/pages/coming-soon) until the real page replaces it in src/app/router.tsx.
 */
export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  tests: '/tests',
  practice: '/practice',
  miniTest: '/mini-test',
  history: '/history',
  premium: '/premium',
  contact: '/contact',
  terms: '/terms',
  privacy: '/privacy',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
