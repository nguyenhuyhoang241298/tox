import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/shared/lib'

/**
 * Button — DESIGN.md › Components › Button.
 * Min height 44px (touch target), radius md, 16px/600. Hover darkens 8%, active scales .98,
 * disabled = 40% opacity + not-allowed cursor.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-body font-semibold whitespace-nowrap transition-[filter,background-color,transform] duration-150 select-none enabled:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 aria-disabled:cursor-not-allowed aria-disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground enabled:hover:brightness-[0.92]',
        secondary:
          'border-input bg-card text-foreground enabled:hover:bg-muted border',
        ghost: 'text-foreground enabled:hover:bg-muted',
        destructive:
          'bg-danger text-danger-foreground enabled:hover:brightness-[0.92]',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5',
        lg: 'h-12 px-6',
        icon: 'size-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  type,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      type={asChild ? type : (type ?? 'button')}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
