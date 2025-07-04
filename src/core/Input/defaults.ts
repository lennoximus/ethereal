import type { InputProps } from './types'

export const INPUT_PROPS_DEFAULTS = {
  disabled: false,
  icon: {
    height: 16,
    width: 16,
  },
  loading: false,
  nativeType: 'text',
} satisfies InputProps
