import BaseTextArea from './BaseTextArea.vue'
import type { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

export default {
  title: 'Atoms/BaseTextArea',
  component: BaseTextArea,
  argTypes: {
    id: { control: 'text', defaultValue: 'textarea-1' },
    name: { control: 'text', defaultValue: 'comments' },
    rows: { control: { type: 'number', min: 1 }, defaultValue: 4 },
    placeholder: { control: 'text', defaultValue: 'Escribe un comentario...' },
    labelName: { control: 'text', defaultValue: 'Comentarios' },
    modelValue: { control: 'text', defaultValue: '' },
    error: { control: 'text' },
    'update:modelValue': { action: 'update:modelValue' },
  },
} satisfies Meta<typeof BaseTextArea>

const Template: StoryFn<typeof BaseTextArea> = (args) => ({
  components: { BaseTextArea },
  setup() {
    const model = ref(args.modelValue)
    return { args, model }
  },
  template: `
    <BaseTextArea
      v-bind="args"
      v-model="model"
      @update:modelValue="args['update:modelValue']"
    />
  `,
})

export const Default = Template.bind({})
Default.args = {
  id: 'textarea-1',
  name: 'comments',
  rows: 4,
  placeholder: 'Escribe un comentario...',
  labelName: 'Comentarios',
  modelValue: '',
}

export const WithError = Template.bind({})
WithError.args = {
  ...Default.args,
  error: 'Este campo es obligatorio',
}
