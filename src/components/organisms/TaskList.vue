<script setup lang="ts">
import TaskItem from '@/components/organisms/TaskItem.vue'
import { useTaskStore } from '@/stores/taskStore'
import { computed, ref } from 'vue'
import BaseSelect from '@/components/atoms/BaseSelect.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import { TaskType } from '@/models/TaskType'
const taskStore = useTaskStore()

const { tasks, completedTasks, pendingTasks, tasksByType } = taskStore

const filterOptions = [
  { id: 1, value: 'completed', label: 'Completed' },
  { id: 2, value: 'pending', label: 'Pending' },
  { id: 3, value: 'urgent', label: 'Urgent' },
  { id: 4, value: 'scheduled', label: 'Scheduled' },
]
const filterOption = ref<string | null>(null)

const filteredTasks = computed(() => {
  if (!filterOption.value) return tasks

  switch (filterOption.value) {
    case 'completed':
      return completedTasks()
    case 'pending':
      return pendingTasks()
    case 'urgent':
      return tasksByType(filterOption.value as TaskType)
    case 'scheduled':
      return tasksByType(filterOption.value as TaskType)
    default:
      return tasks
  }
})
console.log(filteredTasks.value)
const clearFilter = () => {
  filterOption.value = null
}
</script>
<template>
  <div class="mt-6 space-y-3 p-4 rounded-lg bg-gray-200 shadow-xl">
    <div class="flex flex-wrap items-end gap-4">
      <div class="w-52">
        <BaseSelect label="Filter by" :options="filterOptions" v-model="filterOption" />
      </div>
      <BaseButton variant="secondary" @click="clearFilter">Clear filter</BaseButton>
    </div>
    <div
      v-if="filteredTasks.length === 0"
      class="text-center text-lg font-semibold text-deep-ocean"
    >
      No data
    </div>
    <TaskItem v-else v-for="task in filteredTasks" :key="task.id" :task="task" />
  </div>
</template>
