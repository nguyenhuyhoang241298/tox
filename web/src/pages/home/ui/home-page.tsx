import { ArrowRight, BookOpen, Headphones, LogOut } from 'lucide-react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui'
import { useSessionUser, useSignIn, useSignOut } from '../model/session.store'

export function HomePage() {
  const user = useSessionUser()
  const signIn = useSignIn()
  const signOut = useSignOut()
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-8 md:py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-display">TOX</h1>
        <p className="text-body-lg text-muted-foreground">
          {user ? `Xin chào, ${user}!` : 'Thi thử TOEIC Listening & Reading.'}
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Làm đề như thi thật</CardTitle>
          <CardDescription>
            200 câu trong 120 phút, xem điểm ước tính và giải thích chi tiết
            từng câu.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-body flex flex-col gap-3">
            <li className="flex items-center gap-3">
              <Headphones
                className="text-primary size-6 shrink-0"
                strokeWidth={1.75}
                aria-hidden
              />
              Listening: Part 1–4, 100 câu
            </li>
            <li className="flex items-center gap-3">
              <BookOpen
                className="text-primary size-6 shrink-0"
                strokeWidth={1.75}
                aria-hidden
              />
              Reading: Part 5–7, 100 câu
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          {user ? (
            <Button variant="secondary" onClick={signOut}>
              <LogOut strokeWidth={1.75} aria-hidden />
              Đăng xuất
            </Button>
          ) : (
            <Button onClick={() => signIn('bạn')}>
              Bắt đầu
              <ArrowRight strokeWidth={1.75} aria-hidden />
            </Button>
          )}
        </CardFooter>
      </Card>
    </main>
  )
}
