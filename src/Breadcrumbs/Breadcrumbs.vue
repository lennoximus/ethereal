<script setup lang="ts">
import type { BreadcrumbsProps } from './types'

import { useBreadcrumbs } from './composable'
import { BREADCRUMBS_PROPS_DEFAULTS } from './defaults'

defineOptions({
  name: 'EBreadcrumbs',
})

const props = withDefaults(defineProps<BreadcrumbsProps>(), BREADCRUMBS_PROPS_DEFAULTS)

const { attrs } = useBreadcrumbs({ props })
</script>

<template>
  <ul>
    <li>asd</li>
  </ul>
</template>
