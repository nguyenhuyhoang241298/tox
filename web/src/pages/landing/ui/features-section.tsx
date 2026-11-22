import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui'
import { CORE_FEATURES, ROADMAP, type Feature } from '../config/content'
import { SectionHeading } from './section-heading'

function FeatureLink({ feature }: { feature: Feature }) {
  const className =
    'text-primary text-body inline-flex min-h-11 items-center gap-2 rounded-sm font-semibold underline-offset-4 hover:underline'
  const content = (
    <>
      {feature.cta}
      <ArrowRight className="size-5" strokeWidth={1.75} aria-hidden />
    </>
  )
  return feature.href.startsWith('#') ? (
    <a href={feature.href} className={className}>
      {content}
    </a>
  ) : (
    <Link to={feature.href} className={className}>
      {content}
    </Link>
  )
}

export function FeaturesSection() {
  return (
    <section
      id="tinh-nang"
      aria-labelledby="tinh-nang-title"
      className="mx-auto flex max-w-6xl scroll-mt-20 flex-col gap-10 px-4 py-16 md:py-24"
    >
      <SectionHeading
        id="tinh-nang-title"
        eyebrow="Tính năng chính"
        title="Mọi thứ bạn cần để luyện TOEIC L&R"
      >
        Từ làm đề như phòng thi thật đến xem lại từng câu sai, TOX gói gọn trong
        một ứng dụng chạy trên cả điện thoại và máy tính.
      </SectionHeading>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {CORE_FEATURES.map((feature) => (
          <li key={feature.title} className="flex">
            <Card className="flex-1">
              <CardHeader className="gap-3">
                <span className="bg-primary-soft text-primary flex size-11 items-center justify-center rounded-md">
                  <feature.icon
                    className="size-6"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <CardTitle className="text-h3">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <FeatureLink feature={feature} />
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-h2">Đang phát triển</h3>
          <Badge>Sắp ra mắt</Badge>
        </div>
        <ul className="grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {ROADMAP.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="bg-muted text-muted-foreground flex size-11 shrink-0 items-center justify-center rounded-md">
                <item.icon className="size-6" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-body font-semibold">{item.title}</p>
                <p className="text-body text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
