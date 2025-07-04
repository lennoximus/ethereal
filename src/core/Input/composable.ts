import type { InputProps } from './types'
import { computed, useId } from 'vue'

import { pixelize } from '../utils'

export interface UseInputOptions {
  props: Required<InputProps>
}

export function useInput(options: UseInputOptions) {
  const { props } = options

  const id = computed(() => `e-input-${useId()}`)
  const attrs = computed(() => {
    const iconsAttrs = {
      style: {
        height: pixelize(props.icon.height),
        width: pixelize(props.icon.width),
      },
    }

    return {
      appendIcon: iconsAttrs,
      input: {
        disabled: props.disabled,
        id: id.value,
        type: props.nativeType,
      },
      prependIcon: iconsAttrs,
      root: {
        for: id.value,
      },
    }
  })

  return {
    attrs,
  }
}
