export interface InputProps {
  /**
   * Represents whether the input is in disabled state. Input won't be responding to typing in this state.
   * @default false
   */
  disabled?: boolean
  /**
   * Icon configuration. Includes sizes.
   * @default {height: 16; width: 16}
   */
  icon?: {
    height: number | string
    width: number | string
  }
  /**
   * Represents whether the input is in loading state. Input won't be responding to typing in this state.
   * @default false
   */
  loading?: boolean
  /**
   * The type of the input. Relates to native possible HTML input types variants.
   * @default 'text'
   */
  nativeType?: HTMLInputElement['type']
}
