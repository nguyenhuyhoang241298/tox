import { Clock, Flag } from 'lucide-react'
import { AnswerOption, Badge, Card, ProgressBar } from '@/shared/ui'

/** Static, non-interactive picture of the exam screen for the hero. */
export function ExamPreview() {
  return (
    <figure className="flex flex-col gap-3">
      <Card inert className="shadow-popover gap-5 select-none">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="primary">Part 5 · Câu 112/200</Badge>
          <span className="text-label bg-muted inline-flex items-center gap-1.5 rounded-full px-3 py-1 tabular-nums">
            <Clock className="size-4" strokeWidth={1.75} aria-hidden />
            1:12:48
          </span>
        </div>
        <p className="text-body-lg">
          The new branch office will open next month, ______ the company plans
          to hire twenty additional staff.
        </p>
        <div role="radiogroup" className="flex flex-col gap-3">
          <AnswerOption letter="A">although</AnswerOption>
          <AnswerOption letter="B" state="selected">
            and
          </AnswerOption>
          <AnswerOption letter="C">because of</AnswerOption>
          <AnswerOption letter="D">despite</AnswerOption>
        </div>
        <div className="flex items-center gap-4">
          <ProgressBar
            value={112}
            max={200}
            label="Tiến độ bài thi"
            className="flex-1"
          />
          <span className="text-label text-muted-foreground inline-flex items-center gap-1.5">
            <Flag className="size-4" strokeWidth={1.75} aria-hidden />3 câu đánh
            dấu
          </span>
        </div>
      </Card>
      <figcaption className="text-caption text-muted-foreground">
        Minh họa giao diện làm bài Reading trên TOX.
      </figcaption>
    </figure>
  )
}
