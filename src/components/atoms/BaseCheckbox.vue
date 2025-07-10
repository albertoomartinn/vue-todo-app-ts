<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'

defineProps<{
  id: string
  label?: string
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
  emit('change', target.checked)
}
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="relative inline-flex items-center justify-center">
      <span
        :class="[
          'w-6 h-6 rounded-full border-2 transition-all duration-200 ease-in-out flex items-center justify-center',
          modelValue
            ? 'bg-deep-ocean border-deep-ocean shadow-sm'
            : 'bg-white border-gray-400 hover:border-gray-500',
        ]"
      >
        <CheckIcon v-if="modelValue" class="w-4 h-4 text-white transition-opacity duration-200" />
      </span>

      <input
        :id="id"
        type="checkbox"
        class="absolute opacity-0 w-6 h-6 cursor-pointer"
        :checked="modelValue"
        @change="onChange"
      />
    </div>

    <label
      v-if="label"
      :for="id"
      class="text-sm text-gray-800 dark:text-gray-200 cursor-pointer select-none"
    >
      {{ label }}
    </label>
  </div>
</template>
