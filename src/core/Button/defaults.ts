import type { ButtonProps } from './types'

export const BUTTON_PROPS_DEFAULTS = {
  disabled: false,
  icon: {
    height: 16,
    width: 16,
  },
  loading: false,
  nativeType: 'button',
} satisfies ButtonProps
