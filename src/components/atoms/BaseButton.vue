<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const onClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event)
}

const computedClass = computed(() => {
  const base =
    'rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

  const variants: Record<string, string> = {
    primary: 'bg-deep-ocean text-white hover:bg-frost-blue transition duration-200',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-300 border border-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  return `${base} ${variants[props.variant || 'primary']}`
})
</script>
<template>
  <button :type="type" :disabled="disabled" :class="computedClass" @click="onClick">
    <slot />
  </button>
</template>
