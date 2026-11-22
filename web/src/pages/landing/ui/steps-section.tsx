import { STEPS } from '../config/content'
import { SectionHeading } from './section-heading'

export function StepsSection() {
  return (
    <section
      id="cach-hoat-dong"
      aria-labelledby="cach-hoat-dong-title"
      className="mx-auto flex max-w-6xl scroll-mt-20 flex-col gap-10 px-4 py-16 md:py-24"
    >
      <SectionHeading
        id="cach-hoat-dong-title"
        eyebrow="Cách học với TOX"
        title="Ba bước để lên điểm"
      >
        Biết điểm hiện tại, tìm Part yếu nhất và luyện đúng chỗ đó cho đến khi
        đạt mục tiêu.
      </SectionHeading>
      <ol className="grid gap-8 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="bg-primary text-primary-foreground text-h3 flex size-11 shrink-0 items-center justify-center rounded-full tabular-nums">
                {index + 1}
              </span>
              <span
                aria-hidden
                className="bg-border hidden h-px flex-1 md:block"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-h3 flex items-center gap-2">
                <step.icon
                  className="text-primary size-5"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {step.title}
              </h3>
              <p className="text-body text-muted-foreground max-w-[40ch]">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
