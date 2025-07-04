<script setup lang="ts">
import type { ButtonEmits, ButtonProps, ButtonSlots } from './types'

import { getPropsDefaults } from '../utils'
import { useButton } from './composable'
import { BUTTON_PROPS_DEFAULTS } from './defaults'

defineOptions({
  name: 'EButton',
})

const props = withDefaults(defineProps<ButtonProps>(), getPropsDefaults(BUTTON_PROPS_DEFAULTS))
const emits = defineEmits<ButtonEmits>()
const slots = defineSlots<ButtonSlots>()

const { attrs, component, handlers } = useButton({ emits, props })
</script>

<template>
  <component
    v-bind="attrs.root"
    :is="component.root"
    @click.stop="handlers.onClick"
  >
    <span
      v-if="'prependIcon' in slots"
      v-bind="attrs.prependIcon"
    >
      <slot name="prependIcon" />
    </span>

    <span>
      <slot />
    </span>

    <span
      v-if="'appendIcon' in slots"
      v-bind="attrs.appendIcon"
    >
      <slot name="appendIcon" />
    </span>
  </component>
</template>
