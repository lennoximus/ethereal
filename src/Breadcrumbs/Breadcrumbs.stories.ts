import type { Meta, StoryObj } from '@storybook/vue3'

import { computed } from 'vue'

import EBreadcrumbs from './Breadcrumbs.vue'
import { BREADCRUMBS_PROPS_DEFAULTS } from './defaults'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  args: {
    items: [
      {
        href: 'https://www.google.ru/?hl=ru',
        text: 'First',
      },
      {
        href: 'https://www.google.ru/?hl=ru',
        text: 'Second',
      },
      {
        href: 'https://www.google.ru/?hl=ru',
        text: 'Third',
      },
    ],
    separator: BREADCRUMBS_PROPS_DEFAULTS.separator,
  },
  argTypes: { },
  component: EBreadcrumbs,
  render: (args: any) => ({
    components: { EBreadcrumbs },
    setup() {
      const props = computed(() => ({
        items: args.items,
        separator: args.separator,
      }))

      return {
        props,
      }
    },
    template: `
      <EBreadcrumbs v-bind="props"/>
    `,
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Components/Breadcrumbs',
} satisfies Meta<typeof EBreadcrumbs>

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
