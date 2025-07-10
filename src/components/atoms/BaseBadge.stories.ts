import BaseBadge from './BaseBadge.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Atoms/BaseBadge',
  component: BaseBadge,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Activo',
    },
    color: {
      control: { type: 'select' },
      options: ['yellow', 'red', 'green', 'gray'],
    },
  },
} satisfies Meta<typeof BaseBadge>

const Template: StoryFn<typeof BaseBadge> = (args) => ({
  components: { BaseBadge },
  setup() {
    return { args }
  },
  template: `<BaseBadge v-bind="args" />`,
})

export const Yellow = Template.bind({})
Yellow.args = {
  title: 'En espera',
  color: 'yellow',
}

export const Red = Template.bind({})
Red.args = {
  title: 'Error',
  color: 'red',
}

export const Green = Template.bind({})
Green.args = {
  title: 'Correcto',
  color: 'green',
}

export const Gray = Template.bind({})
Gray.args = {
  title: 'Sin estado',
  color: 'gray',
}
