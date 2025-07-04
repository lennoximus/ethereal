import type { ButtonEmits, ButtonProps } from './types'
import { computed } from 'vue'

import { pixelize } from '../utils'

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

  const attrs = computed(() => {
    const iconsAttrs = {
      style: {
        height: pixelize(props.icon.height),
        width: pixelize(props.icon.width),
      },
    }

    return {
      appendIcon: iconsAttrs,
      prependIcon: iconsAttrs,
      root: {
        class: 'bg-[#333]',
        disabled: props.disabled,
        type: props.nativeType,
      },
    }
  })
  const component = computed(() => ({
    root: 'button',
  }))

  return {
    attrs,
    component,
    handlers: {
      onClick,
    },
  }
}
