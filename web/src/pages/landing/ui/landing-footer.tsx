import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { Button, Logo } from '@/shared/ui'

const FOOTER_COLUMNS = [
  {
    title: 'Sản phẩm',
    links: [
      { label: 'Kho đề', to: ROUTES.tests },
      { label: 'Luyện theo Part', to: ROUTES.practice },
      { label: 'Mini test', to: ROUTES.miniTest },
      { label: 'Premium', to: ROUTES.premium },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'Câu hỏi thường gặp', to: '#hoi-dap' },
      { label: 'Liên hệ', to: ROUTES.contact },
    ],
  },
  {
    title: 'Pháp lý',
    links: [
      { label: 'Điều khoản sử dụng', to: ROUTES.terms },
      { label: 'Chính sách quyền riêng tư', to: ROUTES.privacy },
    ],
  },
]

const linkClass =
  'text-body text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center rounded-sm transition-colors'

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="mx-auto max-w-6xl px-4 pb-16 md:pb-24"
    >
      <div className="bg-primary-soft flex flex-col items-start gap-6 rounded-lg p-6 md:flex-row md:items-center md:justify-between md:p-12">
        <div className="flex max-w-[50ch] flex-col gap-2">
          <h2 id="cta-title" className="text-h1">
            Sẵn sàng biết điểm TOEIC của mình?
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Tạo tài khoản miễn phí và làm đề đầu tiên trong vài phút.
          </p>
        </div>
        <Button asChild size="lg">
          <Link to={ROUTES.register}>
            Bắt đầu miễn phí
            <ArrowRight strokeWidth={1.75} aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  )
}

export function LandingFooter() {
  return (
    <footer className="bg-card border-t pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-2">
            <Logo className="h-8 self-start" />
            <p className="text-body text-muted-foreground max-w-[40ch]">
              Web app thi thử TOEIC Listening & Reading dành cho người học Việt
              Nam.
            </p>
          </div>
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-label mb-2">{column.title}</p>
              <ul className="flex flex-col">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith('#') ? (
                      <a href={link.to} className={linkClass}>
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="text-caption text-muted-foreground flex flex-col gap-2 border-t pt-6">
          <p lang="en">
            TOEIC is a registered trademark of ETS. This product is not endorsed
            or approved by ETS.
          </p>
          <p>© 2026 TOX. Điểm trên TOX là điểm ước tính, chỉ để tham khảo.</p>
        </div>
      </div>
    </footer>
  )
}
