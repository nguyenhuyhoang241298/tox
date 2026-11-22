import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { Badge, Button } from '@/shared/ui'
import { TEST_FORMAT } from '../config/content'
import { ExamPreview } from './exam-preview'

const PROMISES = [
  'Miễn phí để bắt đầu',
  'Giải thích tiếng Việt',
  'Dùng tốt trên điện thoại',
]

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="border-b">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 md:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <Badge variant="primary">Thi thử TOEIC Listening & Reading</Badge>
          <h1 id="hero-title" className="text-display max-w-[20ch]">
            Thi thử như thi thật, biết rõ mình mất điểm ở đâu
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-[55ch]">
            TOX cho bạn làm đề TOEIC đúng định dạng mới, chấm điểm ước tính ngay
            sau khi nộp và giải thích từng câu bằng tiếng Việt. Luyện đúng Part
            còn yếu cho đến khi đạt điểm mục tiêu.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to={ROUTES.register}>
                Bắt đầu miễn phí
                <ArrowRight strokeWidth={1.75} aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to={ROUTES.tests}>Làm thử một đề</Link>
            </Button>
          </div>
          <ul className="text-label text-muted-foreground flex flex-wrap gap-x-6 gap-y-2">
            {PROMISES.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check
                  className="text-success size-4"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ExamPreview />
      </div>
      <div className="bg-card border-t">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
          {TEST_FORMAT.map((item) => (
            <div key={item.value} className="flex flex-col gap-1">
              <dt className="text-label text-muted-foreground order-2">
                {item.label}
              </dt>
              <dd className="text-h1 text-primary order-1 tabular-nums">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
