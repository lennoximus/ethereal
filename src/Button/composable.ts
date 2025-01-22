import { computed } from 'vue'

import type { ButtonEmits, ButtonProps } from './types'

export interface UseButtonOptions {
  emits: ButtonEmits
  props: Required<ButtonProps>
}

export function useButton(options: UseButtonOptions) {
  const { emits, props } = options

  function onClick(event: MouseEvent) {
    if ([props.disabled, props.loading].some(Boolean)) {
      return
    }

    emits('click', event)
  }

  const attrs = computed(() => ({
    root: {
      type: props.nativeType,
    },
  }))

  return {
    attrs,
    handlers: {
      onClick,
    },
  }
}
