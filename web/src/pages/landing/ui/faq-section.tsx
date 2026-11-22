import { ChevronDown } from 'lucide-react'
import { FAQS } from '../config/content'
import { SectionHeading } from './section-heading'

export function FaqSection() {
  return (
    <section
      id="hoi-dap"
      aria-labelledby="hoi-dap-title"
      className="mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-4 py-16 md:py-24 lg:grid-cols-[1fr_2fr]"
    >
      <SectionHeading
        id="hoi-dap-title"
        eyebrow="Hỏi đáp"
        title="Câu hỏi thường gặp"
      />
      <div className="flex flex-col border-t">
        {FAQS.map((faq) => (
          <details key={faq.question} className="group border-b">
            <summary className="text-body-lg flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 font-semibold [&::-webkit-details-marker]:hidden">
              {faq.question}
              <ChevronDown
                className="text-muted-foreground size-5 shrink-0 transition-transform duration-150 group-open:rotate-180"
                strokeWidth={1.75}
                aria-hidden
              />
            </summary>
            <p className="text-body text-muted-foreground max-w-[65ch] pb-5">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
