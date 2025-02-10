import { computed } from 'vue'

import type { DividerProps } from './types'

export interface UseDividerOptions {
  props: Required<DividerProps>
}

export function useDivider(options: UseDividerOptions) {
  const { props } = options

  const ariaOrientation = computed(() => {
    if (props.role === 'separator') {
      if (props.vertical) {
        return 'vertical' as const
      }

      return 'horizontal' as const
    }

    return undefined
  })
  const size = computed(() =>
    typeof props.size === 'number' ? `${props.size}px` : props.size,
  )
  const attrs = computed(() => ({
    root: {
      'aria-orientation': ariaOrientation.value,
      'role': props.role,
      'style': {
        backgroundColor: props.color,
        border: 'none',
        margin: '0',
        [props.vertical ? 'height' : 'width']: '100%',
        [props.vertical ? 'width' : 'height']: size.value,
      },
    },
  }))

  return {
    attrs,
  }
}
