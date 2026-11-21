import * as React from 'react'
import { cn } from '@/shared/lib'

/** Input — h-11, radius md, 1px `input` border (>= 3:1), 16px text (no iOS zoom). */
function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'border-input bg-card text-body placeholder:text-muted-foreground h-11 w-full min-w-0 rounded-md border px-3 transition-[border-color] disabled:cursor-not-allowed disabled:opacity-40',
        'focus-visible:border-ring',
        'aria-invalid:border-danger',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
