<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  color: 'yellow' | 'red' | 'green' | 'gray'
}>()

const colorClass = computed(() => {
  switch (props.color) {
    case 'yellow':
      return 'bg-yellow-100 text-yellow-700 ring-yellow-700/10'
    case 'red':
      return 'bg-red-100 text-red-700 ring-red-700/10'
    case 'green':
      return 'bg-green-100 text-green-700 ring-green-700/10'
    case 'gray':
      return 'bg-gray-100 text-gray-700 ring-gray-700/10'
    default:
      return ''
  }
})
</script>

<template>
  <span
    class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset capitalize"
    :class="[colorClass]"
  >
    {{ title }}
  </span>
</template>
