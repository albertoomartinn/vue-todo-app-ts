<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue'
import BaseModal from '@/components/atoms/BaseModal.vue'
import TaskForm from '@/components/organisms/TaskForm.vue'
import TaskList from '@/components/organisms/TaskList.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const openForm = ref<boolean>(false)
</script>
<template>
  <BaseButton variant="primary" @click="openForm = true"> Create task </BaseButton>
  <TaskList />
  <BaseModal :show="openForm" @close="openForm = false">
    <div class="relative">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Create Task</h2>
      <XMarkIcon
        class="absolute top-0 right-0 text-gray-500 hover:text-gray-700 focus:outline-none size-6 cursor-pointer"
        @click="openForm = false"
      />
    </div>
    <TaskForm @close="openForm = false" />
  </BaseModal>
</template>
