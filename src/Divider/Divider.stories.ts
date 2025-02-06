import type { Meta, StoryObj } from '@storybook/vue3'

import { DIVIDER_PROPS_DEFAULTS } from './defaults'
import EDivider from './Divider.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  args: {
    ...DIVIDER_PROPS_DEFAULTS,
  },
  argTypes: {},
  component: EDivider,
  render: (args: any) => ({
    components: { EDivider },
    setup() {
      return {
        props: {
          role: args.role,
          size: args.size,
          vertical: args.vertical,
        },
      }
    },
    template: `
      <EDivider v-bind="props"/>
    `,
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Divider',
} satisfies Meta<typeof EDivider>

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
