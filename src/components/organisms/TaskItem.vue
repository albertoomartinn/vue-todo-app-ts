<script setup lang="ts">
import { Task } from '@/models/Task'
import { computed, ref } from 'vue'
import BaseModal from '@/components/atoms/BaseModal.vue'
import TaskForm from '@/components/organisms/TaskForm.vue'
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/solid'
import BaseCheckbox from '@/components/atoms/BaseCheckbox.vue'
import { useTaskStore } from '@/stores/taskStore'
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import { XMarkIcon } from '@heroicons/vue/20/solid'
import DeleteModal from '@/components/molecules/DeleteModal.vue'
const props = defineProps<{
  task: Task
}>()
const taskStore = useTaskStore()
const { toggleTaskCompleted, deleteTask } = taskStore
const openTask = ref<boolean>(false)
const showDeleteModal = ref<boolean>(false)
const completed = ref<boolean>(props.task.completed)

const date = new Date(props.task.createdAt)

const formattedCreateAt = new Intl.DateTimeFormat('es-ES', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
}).format(date)

const onToggle = (task: Task) => {
  toggleTaskCompleted(task)
}
const onDelete = () => {
  deleteTask(props.task)
  showDeleteModal.value = false
}
const color = computed(() => {
  switch (props.task.type) {
    case 'urgent':
      return 'red'
    case 'scheduled':
      return 'green'
    default:
      return 'gray'
  }
})
</script>

<template>
  <div
    :class="[
      task.completed ? 'bg-green-50' : 'bg-ice-mist',
      'relative flex items-center gap-4 justify-between rounded-md p-4 hover:bg-blue-50 shadow-lg',
    ]"
  >
    <BaseCheckbox id="completed" name="completed" v-model="completed" @change="onToggle(task)" />
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
</template>
