import * as React from 'react'
import { cn } from '@/shared/lib'

type ReadingPassageProps = React.ComponentProps<'article'> & {
  /** Meta line, e.g. "Part 7 · Questions 147–149 · Email". */
  meta?: React.ReactNode
}

/**
 * ReadingPassage — Editorial reading mode (Style E): paper background, Literata serif
 * 19/1.7, max 62ch per line, left-aligned, paragraphs spaced 0.9em.
 */
function ReadingPassage({
  meta,
  className,
  children,
  ...props
}: ReadingPassageProps) {
  return (
    <article
      data-slot="reading-passage"
      className={cn(
        'bg-paper text-paper-foreground border-paper-border rounded-lg border p-6',
        className,
      )}
      {...props}
    >
      {meta && <p className="text-label text-paper-muted mb-4">{meta}</p>}
      <div className="text-passage max-w-[62ch] text-left font-serif md:text-[1.25rem] [&_p+p]:mt-[0.9em]">
        {children}
      </div>
    </article>
  )
}

export { ReadingPassage }
