import { ref, computed } from 'vue'
import type { Meta, StoryFn } from '@storybook/vue3'

import TaskItem from './TaskItem.vue'
import BaseModal from '../atoms/BaseModal.vue'
import TaskForm from '../organisms/TaskForm.vue'
import BaseCheckbox from '../atoms/BaseCheckbox.vue'
import DeleteModal from '../molecules/DeleteModal.vue'
import BaseBadge from '../atoms/BaseBadge.vue'

import { PencilIcon, TrashIcon } from '@heroicons/vue/24/solid'
import { XMarkIcon } from '@heroicons/vue/20/solid'

const meta: Meta<typeof TaskItem> = {
  title: 'Organisms/TaskItem',
  component: TaskItem,
  argTypes: {
    task: {
      control: 'object',
    },
  },
  decorators: [
    () => ({
      template: `<div style="max-width: 600px; margin: 2rem auto;"><story /></div>`,
    }),
  ],
}

export default meta

const Template: StoryFn<typeof TaskItem> = (args) => ({
  components: {
    TaskItem,
    BaseModal,
    TaskForm,
    BaseCheckbox,
    DeleteModal,
    BaseBadge,
    PencilIcon,
    TrashIcon,
    XMarkIcon,
  },
  setup() {
    const task = ref({ ...args.task })
    const openTask = ref(false)
    const showDeleteModal = ref(false)
    const completed = ref(task.value.completed)

    const toggleTaskCompleted = () => {
      completed.value = !completed.value
      task.value.completed = completed.value
    }

    const onDelete = () => {
      alert(`Tarea eliminada: ${task.value.title}`)
      showDeleteModal.value = false
    }

    const color = computed(() => {
      switch (task.value.type) {
        case 'urgent':
          return 'red'
        case 'scheduled':
          return 'green'
        default:
          return 'gray'
      }
    })

    // Formatear fecha para mostrar
    const formattedCreateAt = computed(() => {
      const date = new Date(task.value.createdAt)
      return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(date)
    })

    return {
      task,
      completed,
      openTask,
      showDeleteModal,
      toggleTaskCompleted,
      onDelete,
      color,
      formattedCreateAt,
    }
  },
  template: `
    <div
      :class="[
        task.completed ? 'bg-green-50' : 'bg-ice-mist',
        'relative flex items-center gap-4 justify-between rounded-md p-4 hover:bg-blue-50 shadow-lg',
      ]"
    >
      <BaseCheckbox id="completed" name="completed" v-model="completed" @change="toggleTaskCompleted" />
      <div class="absolute top-4 right-4">
        <BaseBadge :title="task.type" :color="color" />
      </div>
      <div class="flex-1 flex flex-col gap-3 divide-y divide-gray-200">
        <div class="pb-2">
          <div :class="[task.completed && 'line-through', 'text-lg font-semibold']">
            {{ task.title }}
          </div>
          <div class="text-md font-medium text-gray-500 whitespace-pre-line">
            {{ task.description }}
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs font-medium text-gray-500">{{ formattedCreateAt }}</div>
          <div class="flex items-center gap-4">
            <PencilIcon class="size-5 text-frost-blue cursor-pointer" @click="openTask = true" />
            <TrashIcon class="size-5 text-red-500 cursor-pointer" @click="showDeleteModal = true" />
          </div>
        </div>
      </div>

      <BaseModal :show="openTask" @close="openTask = false">
        <div class="relative">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Update Task</h2>
          <XMarkIcon
            class="absolute top-0 right-0 text-gray-500 hover:text-gray-700 focus:outline-none size-6 cursor-pointer"
            @click="openTask = false"
          />
        </div>
        <TaskForm @close="openTask = false" :task="task" />
      </BaseModal>

      <DeleteModal
        :show="showDeleteModal"
        title="Delete task"
        message="Are you sure you want to delete the task?"
        @cancel="showDeleteModal = false"
        @delete="onDelete"
      />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Ejemplo de tarea',
    description: 'Esta es una tarea de ejemplo para Storybook.',
    completed: false,
    type: 'urgent',
    createdAt: new Date().toISOString(),
  },
}
