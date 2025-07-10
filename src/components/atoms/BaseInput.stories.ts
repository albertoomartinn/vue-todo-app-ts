import BaseInput from './BaseInput.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Atoms/BaseInput',
  component: BaseInput,
  argTypes: {
    id: { control: 'text', defaultValue: 'input-1' },
    name: { control: 'text', defaultValue: 'inputName' },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
      defaultValue: 'text',
    },
    placeholder: { control: 'text', defaultValue: 'Escribe aquí...' },
    labelName: { control: 'text', defaultValue: 'Nombre' },
    modelValue: { control: 'text', defaultValue: '' },
    error: { control: 'text' },
    'update:modelValue': { action: 'update:modelValue' },
  },
} satisfies Meta<typeof BaseInput>

const Template: StoryFn<typeof BaseInput> = (args) => ({
  components: { BaseInput },
  setup() {
    return { args }
  },
  template: `<BaseInput v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  id: 'input-1',
  name: 'username',
  type: 'text',
  placeholder: 'Escribe tu nombre',
  labelName: 'Nombre',
  modelValue: '',
}

export const WithError = Template.bind({})
WithError.args = {
  ...Default.args,
  error: 'Este campo es obligatorio',
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  ...Default.args,
  type: 'password',
  placeholder: 'Escribe tu contraseña',
  labelName: 'Contraseña',
}
