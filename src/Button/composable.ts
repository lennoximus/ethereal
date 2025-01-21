import type { ButtonEmits, ButtonProps } from './types'

export interface UseButtonOptions {
  emits: ButtonEmits
  props: ButtonProps
}

export function useButton(options: UseButtonOptions) {
  const { emits, props } = options

  function onClick(event: MouseEvent) {
    if ([props.disabled, props.loading].some(Boolean)) {
      return
    }

    emits('click', event)
  }

  return {
    handlers: {
      onClick,
    },
  }
}
