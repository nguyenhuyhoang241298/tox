import { Check } from 'lucide-react'
import { Link } from 'react-router'
import { cn } from '@/shared/lib'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui'
import { PLANS } from '../config/content'
import { SectionHeading } from './section-heading'

export function PricingSection() {
  return (
    <section
      id="bang-gia"
      aria-labelledby="bang-gia-title"
      className="bg-card scroll-mt-20 border-y"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:py-24">
        <SectionHeading
          id="bang-gia-title"
          eyebrow="Bảng giá"
          title="Bắt đầu miễn phí, nâng cấp khi cần"
        >
          Gói miễn phí đủ để làm đề và hiểu từng câu sai. Premium dành cho người
          cần lộ trình riêng và AI Tutor.
        </SectionHeading>
        <ul className="grid gap-6 md:grid-cols-2 lg:max-w-4xl">
          {PLANS.map((plan) => (
            <li key={plan.name} className="flex">
              <Card
                className={cn(
                  'bg-background flex-1',
                  plan.highlighted && 'border-primary border-2',
                )}
              >
                <CardHeader className="gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.highlighted && (
                      <Badge variant="primary">Sắp ra mắt</Badge>
                    )}
                  </div>
                  <p className="text-h1">{plan.price}</p>
                  <CardDescription>{plan.note}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-body flex gap-3">
                        <Check
                          className="text-success mt-0.5 size-5 shrink-0"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={plan.highlighted ? 'secondary' : 'primary'}
                    className="w-full"
                  >
                    <Link to={plan.href}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
