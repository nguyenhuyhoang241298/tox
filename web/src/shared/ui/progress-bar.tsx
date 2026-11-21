import * as React from 'react'
import { cn } from '@/shared/lib'

type ProgressBarProps = React.ComponentProps<'div'> & {
  value: number
  max: number
  /** Accessible name, e.g. "Tiến độ bài thi". */
  label: string
}

/** ProgressBar — h-2, radius full, primary fill; always shows the "12/50" text. */
function ProgressBar({
  value,
  max,
  label,
  className,
  ...props
}: ProgressBarProps) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0
  return (
    <div
      data-slot="progress-bar"
      className={cn('flex items-center gap-3', className)}
      {...props}
    >
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className="bg-muted h-2 flex-1 overflow-hidden rounded-full"
      >
        <div
          className="bg-primary h-full rounded-full transition-[width] duration-200"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-label text-muted-foreground tabular-nums">
        {value}/{max}
      </span>
    </div>
  )
}

export { ProgressBar }
