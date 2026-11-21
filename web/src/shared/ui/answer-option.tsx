import { CircleCheck, CircleX } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/shared/lib'

export type AnswerOptionState = 'default' | 'selected' | 'correct' | 'wrong'

type AnswerOptionProps = Omit<React.ComponentProps<'button'>, 'children'> & {
  /** Option letter: A, B, C or D. */
  letter: string
  state?: AnswerOptionState
  children: React.ReactNode
}

const stateClasses: Record<AnswerOptionState, string> = {
  default: 'border-input enabled:hover:bg-muted',
  selected: 'border-primary bg-primary-soft border-2',
  correct: 'border-success bg-success-soft border-2',
  wrong: 'border-danger bg-danger-soft border-2',
}

const letterClasses: Record<AnswerOptionState, string> = {
  default: 'border-input text-foreground border',
  selected: 'bg-primary text-primary-foreground',
  correct: 'bg-success text-success-foreground',
  wrong: 'bg-danger text-danger-foreground',
}

/**
 * AnswerOption — full-width row, min-h 56px, radius md, letter badge on the left.
 * State is never shown by color alone: correct/wrong add an icon and a text label.
 * Render several inside an element with role="radiogroup".
 */
function AnswerOption({
  letter,
  state = 'default',
  className,
  children,
  ...props
}: AnswerOptionProps) {
  const checked = state !== 'default'
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      data-slot="answer-option"
      data-state={state}
      className={cn(
        'bg-card text-body-lg flex min-h-14 w-full cursor-pointer items-center gap-3 rounded-md border-[1.5px] px-4 py-3 text-left transition-colors duration-150 disabled:cursor-default',
        stateClasses[state],
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          'text-label flex size-8 shrink-0 items-center justify-center rounded-full font-semibold',
          letterClasses[state],
        )}
      >
        {letter}
      </span>
      <span className="flex-1">{children}</span>
      {state === 'correct' && (
        <span className="text-success text-label flex shrink-0 items-center gap-1.5">
          <CircleCheck className="size-5" aria-hidden />
          Đáp án đúng
        </span>
      )}
      {state === 'wrong' && (
        <span className="text-danger text-label flex shrink-0 items-center gap-1.5">
          <CircleX className="size-5" aria-hidden />
          Bạn chọn
        </span>
      )}
    </button>
  )
}

export { AnswerOption }
