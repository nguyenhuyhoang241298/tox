import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/** Custom design tokens (see app/styles/index.css) so twMerge groups them correctly. */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'display',
        'h1',
        'h2',
        'h3',
        'body-lg',
        'body',
        'passage',
        'label',
        'caption',
      ],
      shadow: ['card', 'popover'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
