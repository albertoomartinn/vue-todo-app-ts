import BaseModal from './BaseModal.vue'
import type { StoryFn } from '@storybook/vue3'

export default {
  title: 'Atoms/BaseModal',
  component: BaseModal,
  argTypes: {
    show: { control: 'boolean' },
    title: { control: 'text' },
  },
}

interface BaseModalArgs {
  show: boolean
  title: string
}

const Template: StoryFn<BaseModalArgs> = (args) => ({
  components: { BaseModal },
  setup() {
    return { args }
  },
  template: `
    <div>
      <button @click="args.show = true" class="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Open Modal</button>
      <BaseModal v-bind="args" @close="args.show = false">
        <p class="text-sm text-gray-600">Contenido del modal.</p>
      </BaseModal>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  show: true,
  title: 'Título del modal',
}
