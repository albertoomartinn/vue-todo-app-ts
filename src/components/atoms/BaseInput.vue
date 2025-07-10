<script setup lang="ts">
defineProps<{
  id: string
  name: string
  type: string
  placeholder?: string
  labelName?: string
  modelValue: string
  error?: string
}>()
const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
<template>
  <div>
    <label v-if="labelName" :for="name" class="block text-sm/6 font-medium text-gray-900">
      {{ labelName }}
    </label>
    <div class="">
      <input
        :type="type"
        :name="name"
        :id="id"
        :class="[
          error
            ? 'outline-red-500 focus:outline-red-500'
            : 'text-gray-900 outline-gray-300 focus:outline-deep-ocean',
          'block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 focus:outline-2 placeholder:text-gray-400 sm:text-sm/6',
        ]"
        :placeholder="placeholder"
        :value="modelValue"
        @input="onInput"
      />
    </div>
    <div v-if="error" class="text-base text-red-500">
      {{ error }}
    </div>
  </div>
</template>
