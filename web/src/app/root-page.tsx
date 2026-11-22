import { useSessionUser } from '@/entities/session'
import { HomePage } from '@/pages/home'
import { LandingPage } from '@/pages/landing'

/** "/" shows the landing page to visitors and the learner home once logged in. */
export function RootPage() {
  const user = useSessionUser()
  return user ? <HomePage /> : <LandingPage />
}
