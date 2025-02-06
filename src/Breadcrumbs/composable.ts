import type { BreadcrumbsProps } from './types'

export interface UseBreadcrumbsOptions {
  props: Required<BreadcrumbsProps>
}

export function useBreadcrumbs(options: UseBreadcrumbsOptions) {
  const { props } = options
}
