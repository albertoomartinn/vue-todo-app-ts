import BaseSelect from './BaseSelect.vue'
import type { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

interface Option {
  id: string | number
  label: string
  value: string | number
}

export default {
  title: 'Atoms/BaseSelect',
  component: BaseSelect,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    modelValue: { control: 'select' },
  },
} satisfies Meta<typeof BaseSelect>

const options: Option[] = [
  { id: 1, label: 'Opción 1', value: '1' },
  { id: 2, label: 'Opción 2', value: '2' },
  { id: 3, label: 'Opción 3', value: '3' },
]

const Template: StoryFn<typeof BaseSelect> = (args) => ({
  components: { BaseSelect },
  setup() {
    const selected = ref(args.modelValue ?? null)
    return { args, selected, options }
  },
  template: `
    <BaseSelect
      v-bind="args"
      :options="options"
      v-model="selected"
    />
  `,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Seleccione una opción',
  placeholder: 'Por favor elija...',
  modelValue: '1',
  disabled: false,
  error: '',
}

export const WithError = Template.bind({})
WithError.args = {
  ...Default.args,
  error: 'Selecciona una opción válida',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}
