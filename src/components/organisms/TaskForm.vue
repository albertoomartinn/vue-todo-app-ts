<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { Task } from '@/models/Task'
import { useTaskStore } from '@/stores/taskStore'
import { TaskType, type TaskForm } from '@/models/TaskType'

import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseTextArea from '@/components/atoms/BaseTextArea.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import BaseSelect from '@/components/atoms/BaseSelect.vue'

const props = defineProps<{
  task?: Task | null
}>()

const emit = defineEmits(['close'])

const taskForm = ref<TaskForm>({
  title: props.task?.title ?? '',
  description: props.task?.description ?? '',
  type: props.task?.type ?? TaskType.Scheduled,
})
const errors = ref({
  title: '',
  description: '',
  type: '',
})
const typeOptions = Object.values(TaskType).map((value, index) => ({
  id: index,
  value,
  label: value,
}))

const taskStore = useTaskStore()

const { addTask, updateTask } = taskStore
const validateForm = () => {
  let isValid = true
  if (!taskForm.value.title.trim()) {
    errors.value.title = 'Title is required.'
    isValid = false
  } else {
    errors.value.title = ''
  }

  if (!taskForm.value.description.trim()) {
    errors.value.description = 'Description is required.'
    isValid = false
  } else if (taskForm.value.description.length > 255) {
    errors.value.description = 'Description cannot exceed 255 characters.'
    isValid = false
  } else {
    errors.value.description = ''
  }
  if (!taskForm.value.type) {
    errors.value.type = 'Task type is required.'
    isValid = false
  } else {
    errors.value.type = ''
  }

  return isValid
}
const onSubmit = () => {
  const { title, description, type } = taskForm.value
  if (!validateForm()) return
  addTask(type, title, description)

  emit('close')
}
const onUpdate = () => {
  if (!props.task?.id) return
  if (!validateForm()) return
  updateTask(props.task, taskForm.value)

  emit('close')
}
</script>

<template>
  <form @submit.prevent="task?.id ? onUpdate() : onSubmit()" class="space-y-4 max-w-md mx-auto">
    <BaseInput
      id="title"
      name="title"
      type="text"
      label-name="Title"
      v-model="taskForm.title"
      :error="errors.title"
    />
    <BaseTextArea
      id="description"
      name="description"
      label-name="Description"
      v-model="taskForm.description"
      :error="errors.description"
    />
    <BaseSelect
      id="type"
      name="type"
      label="Task type"
      :options="typeOptions"
      v-model="taskForm.type"
      :error="errors.type"
      :disabled="task?.id ? true : false"
    />
    <div class="flex justify-end gap-2">
      <BaseButton variant="secondary" type="reset" @click="$emit('close')"> Cancel </BaseButton>
      <BaseButton variant="primary" type="submit">
        {{ task?.id ? 'Update' : 'Create' }}
      </BaseButton>
    </div>
  </form>
</template>
