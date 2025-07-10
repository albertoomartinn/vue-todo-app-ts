import DeleteModal from './DeleteModal.vue'
import type { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

export default {
  title: 'Molecules/DeleteModal',
  component: DeleteModal,
  argTypes: {
    show: { control: 'boolean' },
    title: { control: 'text', defaultValue: 'Eliminar elemento' },
    message: { control: 'text', defaultValue: '¿Estás seguro que quieres eliminar este elemento?' },
    deleteText: { control: 'text', defaultValue: 'Eliminar' },
    cancelText: { control: 'text', defaultValue: 'Cancelar' },
    delete: { action: 'delete' },
    cancel: { action: 'cancel' },
  },
} satisfies Meta<typeof DeleteModal>

const Template: StoryFn<typeof DeleteModal> = (args) => ({
  components: { DeleteModal },
  setup() {
    const isOpen = ref(args.show)

    const onDelete = () => {
      isOpen.value = false
      args.delete()
    }
    const onCancel = () => {
      isOpen.value = false
      args.cancel()
    }

    return { args, isOpen, onDelete, onCancel }
  },
  template: `
    <DeleteModal
      :show="isOpen"
      :title="args.title"
      :message="args.message"
      :deleteText="args.deleteText"
      :cancelText="args.cancelText"
      @delete="onDelete"
      @cancel="onCancel"
    />
  `,
})

export const Default = Template.bind({})
Default.args = {
  show: true,
}
