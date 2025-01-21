<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from './types'

import { useButton } from './composable'
import { BUTTON_PROPS_DEFAULTS } from './defaults'

defineOptions({
  name: 'EButton',
})

const props = withDefaults(defineProps<ButtonProps>(), BUTTON_PROPS_DEFAULTS)
const emits = defineEmits<ButtonEmits>()

const { handlers } = useButton({ emits, props })
</script>

<template>
  <button @click="handlers.onClick">
    <slot />
  </button>
</template>
