<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string
    name: string
    rows?: number
    placeholder?: string
    labelName: string
    modelValue: string | undefined
    error?: string
  }>(),
  {
    rows: 4,
    placeholder: '',
  },
)
const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>
<template>
  <div>
    <label
      :for="id"
      :class="[error ? 'text-red-500' : 'text-gray-900', 'block text-sm/6 font-medium']"
      >{{ labelName }}</label
    >
    <div class="mt-2">
      <textarea
        :class="[
          error
            ? 'outline-red-500 focus:outline-red-500'
            : 'text-gray-900 outline-gray-300 focus:outline-deep-ocean',
          'block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1  placeholder:text-gray-400 focus:outline-2 sm:text-sm/6',
        ]"
        :rows="rows"
        :name="name"
        :id="id"
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
