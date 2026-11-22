import { Check } from 'lucide-react'
import { AnswerOption, Badge, Card, ReadingPassage } from '@/shared/ui'
import { SectionHeading } from './section-heading'

const POINTS = [
  'Lời giải thích bằng tiếng Việt cho cả đáp án đúng và đáp án bạn chọn',
  'Trích dẫn câu trong bài làm bằng chứng',
  'Transcript cho Part 1–4 và bản dịch nghĩa',
]

export function ExplanationSection() {
  return (
    <section
      id="giai-thich"
      aria-labelledby="giai-thich-title"
      className="bg-card scroll-mt-20 border-y"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            id="giai-thich-title"
            eyebrow="Sau khi nộp bài"
            title="Hiểu vì sao mình sai, không chỉ biết mình sai"
          />
          <ul className="flex flex-col gap-3">
            {POINTS.map((point) => (
              <li key={point} className="text-body flex gap-3">
                <Check
                  className="text-success mt-0.5 size-5 shrink-0"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
          <ReadingPassage meta="Part 7 · Câu 147 · Email">
            <p>Dear Ms. Tran,</p>
            <p>
              Thank you for registering for the Riverside Business Forum.
              Because of high demand, the opening session has been moved from
              Room B to the Main Hall. Please bring your confirmation email to
              the front desk, where you will receive your name badge.
            </p>
            <p>
              Best regards,
              <br />
              Daniel Brooks, Event Coordinator
            </p>
          </ReadingPassage>

          <Card className="gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Câu 147</Badge>
              <Badge variant="success">Ví dụ giải thích</Badge>
            </div>
            <p className="text-body-lg">Why was the opening session moved?</p>
            <div inert role="radiogroup" className="flex flex-col gap-3">
              <AnswerOption letter="B" state="correct">
                Many people want to attend.
              </AnswerOption>
              <AnswerOption letter="C" state="wrong">
                Room B is being repaired.
              </AnswerOption>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-label text-muted-foreground">Giải thích</p>
              <blockquote className="border-primary text-body border-l-[3px] pl-4 font-serif">
                “Because of high demand, the opening session has been moved…”
              </blockquote>
              <p className="text-body max-w-[65ch] font-serif">
                “High demand” nghĩa là có nhiều người muốn tham dự, nên phiên
                khai mạc được chuyển sang hội trường lớn hơn. Bài không nhắc đến
                việc sửa phòng B, vì vậy đáp án C sai.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
