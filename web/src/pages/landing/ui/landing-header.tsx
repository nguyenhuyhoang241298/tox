import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { Button } from '@/shared/ui'
import { NAV_LINKS } from '../config/content'

export function LandingHeader() {
  return (
    <header className="bg-background sticky top-0 z-10 border-b pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4">
        <Link
          to={ROUTES.home}
          className="text-h2 rounded-sm font-bold tracking-tight"
          aria-label="TOX, về trang chủ"
        >
          TOX
        </Link>
        <nav aria-label="Mục trên trang" className="hidden flex-1 lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-label text-muted-foreground hover:bg-muted hover:text-foreground inline-flex h-11 items-center rounded-md px-3 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="ghost" className="px-3 sm:px-5">
            <Link to={ROUTES.login}>Đăng nhập</Link>
          </Button>
          <Button asChild className="px-4 sm:px-5">
            <Link to={ROUTES.register}>
              <span className="sm:hidden">Đăng ký</span>
              <span className="hidden sm:inline">Bắt đầu miễn phí</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
