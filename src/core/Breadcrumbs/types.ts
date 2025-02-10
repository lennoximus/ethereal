export interface BreadcrumbsItem {
  /**
   * URL for anchor tag.
   */
  href: string
  /**
   * Inner text to be rendered as anchor tag.
   */
  text: string
}

export interface BreadcrumbsProps {
  /**
   * Array of items for breadcrumbs to render.
   * @default []
   */
  items?: BreadcrumbsItem[]
  /**
   * Visible separator between breadcrumbs items.
   * @default /
   */
  separator?: string
}
