import { ArrowLeft, Construction, LogIn } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import { useSignIn } from '@/entities/session'
import { ROUTES } from '@/shared/config'
import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/shared/ui'

/**
 * Placeholder for features that are not built yet. Replace the route in
 * src/app/router.tsx with the real page when it ships.
 */
export function ComingSoonPage({
  title,
  description,
  demoSignIn = false,
}: {
  title: string
  description: string
  /** Login placeholder only: lets you enter the logged-in home until auth exists. */
  demoSignIn?: boolean
}) {
  const signIn = useSignIn()
  const navigate = useNavigate()
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center gap-6 px-4 py-12">
      <Card>
        <CardHeader className="gap-3">
          <span className="bg-warning-soft text-warning flex size-11 items-center justify-center rounded-md">
            <Construction className="size-6" strokeWidth={1.75} aria-hidden />
          </span>
          <Badge variant="warning">Sắp ra mắt</Badge>
          <h1 className="text-h1">{title}</h1>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild variant={demoSignIn ? 'secondary' : 'primary'}>
            <Link to={ROUTES.home}>
              <ArrowLeft strokeWidth={1.75} aria-hidden />
              Về trang chủ
            </Link>
          </Button>
          {demoSignIn && (
            <Button
              onClick={() => {
                signIn('bạn')
                navigate(ROUTES.home)
              }}
            >
              <LogIn strokeWidth={1.75} aria-hidden />
              Đăng nhập thử (demo)
            </Button>
          )}
        </CardFooter>
      </Card>
    </main>
  )
}
