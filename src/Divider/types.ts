export interface DividerProps {
  color: string
  /**
   * Refers to aria-orientation.
   * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation
   * @default separator
   */
  role?: 'presentation' | 'separator'
  /**
   * Defines the size of the divider.
   * In case of a horizontal variant relates to height.
   * In case of a vertical variant relates to width.
   * @default 1px
   */
  size?: number | string
  vertical?: boolean
}
