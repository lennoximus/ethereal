import type { Meta, StoryObj } from '@storybook/vue3'

import { fn } from '@storybook/test'
import { computed } from 'vue'

import EButton from './Button.vue'
import { BUTTON_PROPS_DEFAULTS } from './defaults'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  args: {
    disabled: BUTTON_PROPS_DEFAULTS.disabled,
    icon: BUTTON_PROPS_DEFAULTS.icon,
    loading: BUTTON_PROPS_DEFAULTS.loading,
    nativeType: BUTTON_PROPS_DEFAULTS.nativeType,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
  argTypes: {
    nativeType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
  component: EButton,
  render: (args: any) => ({
    components: { EButton },
    setup() {
      const props = computed(() => ({
        disabled: args.disabled,
        icon: args.icon,
        loading: args.loading,
        nativeType: args.nativeType,
      }))
      const handlers = computed(() => ({
        click: args.onClick,
      }))

      return {
        handlers,
        props,
      }
    },
    template: `
      <EButton v-on="handlers" v-bind="props">
        Button Text
      </EButton>
    `,
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof EButton>

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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
