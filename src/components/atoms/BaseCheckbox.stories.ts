import BaseCheckbox from './BaseCheckbox.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Atoms/BaseCheckbox',
  component: BaseCheckbox,
  argTypes: {
    id: {
      control: 'text',
      defaultValue: 'checkbox-1',
    },
    label: {
      control: 'text',
      defaultValue: 'Aceptar términos',
    },
    modelValue: {
      control: 'boolean',
      defaultValue: false,
    },
    'update:modelValue': { action: 'update:modelValue' },
    change: { action: 'change' },
  },
} satisfies Meta<typeof BaseCheckbox>

const Template: StoryFn<typeof BaseCheckbox> = (args) => ({
  components: { BaseCheckbox },
  setup() {
    return { args }
  },
  template: `<BaseCheckbox v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  id: 'check-1',
  label: 'Estoy de acuerdo',
  modelValue: false,
}

export const Checked = Template.bind({})
Checked.args = {
  id: 'check-2',
  label: 'Ya aceptado',
  modelValue: true,
}
