import BaseButton from './BaseButton.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Atoms/BaseButton',
  component: BaseButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'click' },
  },
} satisfies Meta<typeof BaseButton>

const Template: StoryFn<typeof BaseButton> = (args) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: `<BaseButton v-bind="args">Botón</BaseButton>`,
})

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'primary',
  disabled: true,
}
