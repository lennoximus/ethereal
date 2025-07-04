<script setup lang="ts">
import type { InputProps } from './types'

import { getPropsDefaults } from '../utils'
import { useInput } from './composable'
import { INPUT_PROPS_DEFAULTS } from './defaults'

defineOptions({
  name: 'EInput',
})

const props = withDefaults(defineProps<InputProps>(), getPropsDefaults(INPUT_PROPS_DEFAULTS))

const { attrs } = useInput({ props })
</script>

<template>
  <label v-bind="attrs.root">
    <input v-bind="attrs.input">
  </label>
</template>
