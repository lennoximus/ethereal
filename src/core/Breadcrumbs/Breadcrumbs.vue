<script setup lang="ts">
import type { BreadcrumbsProps } from './types'

import { useBreadcrumbs } from './composable'
import { BREADCRUMBS_PROPS_DEFAULTS } from './defaults'

defineOptions({
  name: 'EBreadcrumbs',
})

const props = withDefaults(defineProps<BreadcrumbsProps>(), BREADCRUMBS_PROPS_DEFAULTS)

const {
  attrs,
  breadcrumbsItems,
  breadcrumbsSeparator,
  shouldRenderSeparator,
} = useBreadcrumbs({ props })
</script>

<template>
  <ul v-bind="attrs.root">
    <li
      v-for="({ text, href }, itemIndex) in breadcrumbsItems"
      v-bind="attrs.item"
      :key="text"
    >
      <a
        :href="href"
        v-bind="attrs.itemLink"
      >
        <span v-bind="attrs.itemLinkText">{{ text }}</span>

        <meta
          :content="itemIndex.toString()"
          itemprop="position"
        >
      </a>

      <span v-if="shouldRenderSeparator(itemIndex)">
        {{ breadcrumbsSeparator }}
      </span>
    </li>
  </ul>
</template>
