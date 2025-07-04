import type { Meta, StoryObj } from '@storybook/vue3'

import { computed } from 'vue'

import { INPUT_PROPS_DEFAULTS } from './defaults'
import EInput from './Input.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  args: {
    disabled: INPUT_PROPS_DEFAULTS.disabled,
    loading: INPUT_PROPS_DEFAULTS.loading,
    nativeType: INPUT_PROPS_DEFAULTS.nativeType,
  },
  argTypes: {},
  component: EInput,
  render: (args: any) => ({
    components: { EInput },
    setup() {
      const props = computed(() => ({
        disabled: args.disabled,
        loading: args.loading,
        nativeType: args.nativeType,
      }))

      return {
        props,
      }
    },
    template: `
      <EInput v-bind="props"/>
    `,
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof EInput>

export default meta

type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
}
