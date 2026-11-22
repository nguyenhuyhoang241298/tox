import type { ReactNode } from 'react'

export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="flex max-w-[65ch] flex-col gap-2">
      <p className="text-label text-primary">{eyebrow}</p>
      <h2 id={id} className="text-h1">
        {title}
      </h2>
      {children && (
        <p className="text-body-lg text-muted-foreground">{children}</p>
      )}
    </div>
  )
}
