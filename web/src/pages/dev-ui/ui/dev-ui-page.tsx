import { CircleCheck, Flag, Timer } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import {
  AnswerOption,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  ProgressBar,
  ReadingPassage,
  type AnswerOptionState,
} from '@/shared/ui'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-h2">{title}</h2>
      {children}
    </section>
  )
}

const LETTERS = ['A', 'B', 'C', 'D']

const options = [
  'The meeting has been postponed.',
  'She is reviewing the contract.',
  'They are waiting for the bus.',
  'He forgot his umbrella.',
]

/**
 * Kitchen-sink page (dev only, /dev/ui): every shared component in every state.
 * Review it in light and dark mode before building new screens. See docs/design/DESIGN.md.
 */
export function DevUiPage() {
  const [selected, setSelected] = useState<number | null>(null)
  const reviewStates: AnswerOptionState[] = [
    'default',
    'selected',
    'correct',
    'wrong',
  ]

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-12 px-4 py-8 md:py-12">
      <header className="flex flex-col gap-2">
        <p className="text-label text-muted-foreground">
          Design system · Calm Clean
        </p>
        <h1 className="text-h1">Kitchen sink</h1>
        <p className="text-body text-muted-foreground">
          Kiểm tra font tiếng Việt: Đường ơi, ữ ượ ặ ỷ — TOEIC Part 7
        </p>
      </header>

      <Section title="Typography">
        <div className="flex flex-col gap-3">
          <p className="text-display">Display 32/1.2</p>
          <p className="text-h1">Heading 1 28/1.25</p>
          <p className="text-h2">Heading 2 22/1.3</p>
          <p className="text-h3">Heading 3 18/1.4</p>
          <p className="text-body-lg">Body large 18/1.6 — câu hỏi</p>
          <p className="text-body">Body 16/1.6 — nội dung thường</p>
          <p className="text-label">Label 14/1.4</p>
          <p className="text-caption text-muted-foreground">Caption 13/1.4</p>
          <p className="text-h2 tabular-nums">01:59:07 · 785/990</p>
        </div>
      </Section>

      <Section title="Colors">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['bg-background', 'background'],
            ['bg-card', 'card'],
            ['bg-muted', 'muted'],
            ['bg-primary', 'primary'],
            ['bg-primary-soft', 'primary-soft'],
            ['bg-success', 'success'],
            ['bg-danger', 'danger'],
            ['bg-warning', 'warning'],
          ].map(([cls, name]) => (
            <div key={name} className="flex flex-col gap-2">
              <div className={`${cls} h-12 rounded-md border`} />
              <span className="text-caption text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Button">
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Nộp bài</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button size="icon" variant="secondary" aria-label="Đánh dấu câu">
            <Flag strokeWidth={1.75} />
          </Button>
        </div>
      </Section>

      <Section title="Badge">
        <div className="flex flex-wrap gap-3">
          <Badge>Câu 12/100</Badge>
          <Badge variant="primary">Part 5</Badge>
          <Badge variant="success">
            <CircleCheck aria-hidden /> Đúng
          </Badge>
          <Badge variant="danger">Sai</Badge>
          <Badge variant="warning">
            <Timer aria-hidden /> 04:59
          </Badge>
        </div>
      </Section>

      <Section title="Input">
        <div className="flex max-w-sm flex-col gap-3">
          <Input placeholder="Email" aria-label="Email" />
          <Input
            placeholder="Không hợp lệ"
            aria-label="Không hợp lệ"
            aria-invalid
          />
          <Input placeholder="Disabled" aria-label="Disabled" disabled />
        </div>
      </Section>

      <Section title="ProgressBar">
        <ProgressBar value={12} max={50} label="Tiến độ bài luyện" />
      </Section>

      <Section title="AnswerOption (interactive)">
        <div
          role="radiogroup"
          aria-label="Câu 12"
          className="flex flex-col gap-3"
        >
          {options.map((text, i) => (
            <AnswerOption
              key={text}
              letter={LETTERS[i] ?? '?'}
              state={selected === i ? 'selected' : 'default'}
              onClick={() => setSelected(i)}
            >
              {text}
            </AnswerOption>
          ))}
        </div>
      </Section>

      <Section title="AnswerOption (review states)">
        <div
          role="radiogroup"
          aria-label="Xem lại"
          className="flex flex-col gap-3"
        >
          {reviewStates.map((state, i) => (
            <AnswerOption
              key={state}
              letter={LETTERS[i] ?? '?'}
              state={state}
              disabled
            >
              {state}
            </AnswerOption>
          ))}
        </div>
      </Section>

      <Section title="Card">
        <Card>
          <CardHeader>
            <CardTitle>Đề số 1</CardTitle>
            <CardDescription>200 câu · 120 phút</CardDescription>
          </CardHeader>
          <CardContent>
            <ProgressBar value={0} max={200} label="Tiến độ đề số 1" />
          </CardContent>
          <CardFooter>
            <Button>Bắt đầu thi</Button>
            <Button variant="ghost">Xem chi tiết</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="ReadingPassage">
        <ReadingPassage meta="Part 7 · Questions 147–149 · Email">
          <p>
            Dear Ms. Tran, thank you for your interest in the Senior Analyst
            position. We were impressed with your application and would like to
            invite you to an interview next Tuesday at 10 a.m.
          </p>
          <p>
            Please confirm your availability by replying to this email. If the
            proposed time is not convenient, we will gladly arrange another
            slot.
          </p>
        </ReadingPassage>
      </Section>
    </main>
  )
}
