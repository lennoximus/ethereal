import type { Meta, StoryObj } from '@storybook/vue3'

import { computed } from 'vue'

import { DIVIDER_PROPS_DEFAULTS } from './defaults'
import EDivider from './Divider.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  args: {
    color: 'tomato',
    role: DIVIDER_PROPS_DEFAULTS.role,
    size: DIVIDER_PROPS_DEFAULTS.size,
    vertical: DIVIDER_PROPS_DEFAULTS.vertical,
  },
  argTypes: {
    color: {
      control: 'color',
      options: ['separator', 'presentation'],
    },
    role: {
      control: 'select',
      options: ['separator', 'presentation'],
    },
  },
  component: EDivider,
  render: (args: any) => ({
    components: { EDivider },
    setup() {
      const props = computed(() => ({
        color: args.color,
        role: args.role,
        size: args.size,
        vertical: args.vertical,
      }))

      return {
        props,
      }
    },
    template: `
      <div style="height: 200px;">
        <EDivider v-bind="props"/>
      </div>
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

export const Vertical: Story = {
  args: {
    vertical: true,
  },
}

export const Thick: Story = {
  args: {
    size: '5px',
  },
}
