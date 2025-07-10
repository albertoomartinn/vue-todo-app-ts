<script setup lang="ts">
import TheHeader from '@/components/organisms/TheHeader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-ice-mist">
    <TheHeader title="Task Manager" />
    <main class="flex-1 w-full max-w-4xl mx-auto px-4 py-6">
      <slot />
    </main>
    <footer class="bg-navy-night text-ice-mist text-center p-2 text-sm">
      © 2025 Task App by
      <a class="text-sky-steel" href="https://www.linkedin.com/in/albertoomartin/" target="_blank">
        Alberto Martin
      </a>
    </footer>
  </div>
</template>
