import * as React from 'react'
import { cn } from '@/shared/lib'

/*
 * TOX logo. The mark is an answer sheet: four bubbles (A–D) with one filled in.
 * The wordmark reuses the filled bubble as its "O". Colors come from tokens, so it
 * switches with light/dark automatically. Static copies live in public/logo/.
 * Size it with height classes (e.g. `h-8`); width follows the aspect ratio.
 */

function Bubbles() {
  return (
    <>
      <rect width="512" height="512" rx="116" className="fill-primary" />
      <g fill="none" strokeWidth="26" className="stroke-primary-foreground">
        <circle cx="172" cy="172" r="57" />
        <circle cx="172" cy="340" r="57" />
        <circle cx="340" cy="340" r="57" />
      </g>
      <circle cx="340" cy="172" r="70" className="fill-primary-foreground" />
    </>
  )
}

function Letters() {
  return (
    <>
      <path className="fill-foreground" d="M0 0h78v20H0zM29 0h20v100H29z" />
      <circle
        cx="141"
        cy="50"
        r="40"
        fill="none"
        strokeWidth="20"
        className="stroke-primary"
      />
      <circle cx="141" cy="50" r="15" className="fill-primary" />
      <path
        className="fill-foreground"
        d="M204 0L226.3 0L240 27.5L253.7 0L276 0L251.2 50L276 100L253.7 100L240 72.5L226.3 100L204 100L228.8 50Z"
      />
    </>
  )
}

type LogoProps = Omit<React.ComponentProps<'svg'>, 'viewBox'> & {
  /** `full` = mark + wordmark (header), `mark` = square icon, `wordmark` = letters only. */
  variant?: 'full' | 'mark' | 'wordmark'
  /** Accessible name. Pass `''` when a visible "TOX" label sits next to it. */
  title?: string
}

const viewBoxes = {
  full: '0 0 330 120',
  mark: '0 0 512 512',
  wordmark: '0 0 276 100',
}

function Logo({
  variant = 'full',
  title = 'TOX',
  className,
  ...props
}: LogoProps) {
  const labelled = title !== ''
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBoxes[variant]}
      role={labelled ? 'img' : undefined}
      aria-label={labelled ? title : undefined}
      aria-hidden={labelled ? undefined : true}
      data-slot="logo"
      className={cn('h-8 w-auto shrink-0', className)}
      {...props}
    >
      {variant === 'mark' && <Bubbles />}
      {variant === 'wordmark' && <Letters />}
      {variant === 'full' && (
        <>
          <g transform={`scale(${120 / 512})`}>
            <Bubbles />
          </g>
          <g transform="translate(156 30) scale(0.6)">
            <Letters />
          </g>
        </>
      )}
    </svg>
  )
}

export { Logo, type LogoProps }
