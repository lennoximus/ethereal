import { computed } from 'vue'

import type { BreadcrumbsProps } from './types'

export interface UseBreadcrumbsOptions {
  props: Required<BreadcrumbsProps>
}

export function useBreadcrumbs(options: UseBreadcrumbsOptions) {
  const { props } = options

  const attrs = computed(() => {
    return {
      item: {
        itemprop: 'itemListElement',
        itemscope: '',
        itemtype: 'https://schema.org/ListItem',
      },
      itemLink: {
        itemprop: 'item',
      },
      itemLinkText: {
        itemprop: 'name',
      },
      root: {
        itemscope: '',
        itemtype: 'https://schema.org/BreadcrumbList',
      },
    }
  })
  const breadcrumbsItems = computed(() => props.items)
  const breadcrumbsSeparator = computed(() => props.separator)

  function shouldRenderSeparator(index: number) {
    return index !== breadcrumbsItems.value.length - 1
  }

  return {
    attrs,
    breadcrumbsItems,
    breadcrumbsSeparator,
    shouldRenderSeparator,
  }
}
