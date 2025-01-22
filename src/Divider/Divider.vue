<script setup lang="ts">
import type { DividerProps } from './types'

import { useDivider } from './composable'
import { DIVIDER_PROPS_DEFAULTS } from './defaults'

defineOptions({
  name: 'EDivider',
})

const props = withDefaults(defineProps<DividerProps>(), DIVIDER_PROPS_DEFAULTS)

const { attrs } = useDivider({ props })
</script>

<template>
  <hr v-bind="attrs.root">
</template>
