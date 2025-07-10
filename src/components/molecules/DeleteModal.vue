<script setup lang="ts">
import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'
import BaseButton from '@/components/atoms/BaseButton.vue'
import BaseModal from '@/components/atoms/BaseModal.vue'

defineProps<{
  show: boolean
  title?: string
  message?: string
  deleteText?: string
  cancelText?: string
}>()

defineEmits<{
  (e: 'delete'): void
  (e: 'cancel'): void
}>()
</script>

<template>
  <BaseModal :show="show" @close="$emit('cancel')">
    <div class="sm:flex sm:items-start">
      <div
        class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10"
      >
        <ExclamationTriangleIcon class="size-6 text-red-500" />
      </div>
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 class="text-base font-semibold text-gray-900">{{ title }}</h3>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            {{ message || 'Are you sure you want to continue?' }}
          </p>
          <slot />
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-2 mt-4">
      <BaseButton variant="secondary" @click="$emit('cancel')">
        {{ cancelText || 'Cancel' }}
      </BaseButton>
      <BaseButton variant="danger" @click="$emit('delete')">
        {{ deleteText || 'Delete' }}
      </BaseButton>
    </div>
  </BaseModal>
</template>
