<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
})
</script>
<template>
  <div
    class="text-center text-3xl font-bold text-sky-steel p-4 bg-navy-night border-b border-gray-300"
  >
    {{ title }}
  </div>
</template>
