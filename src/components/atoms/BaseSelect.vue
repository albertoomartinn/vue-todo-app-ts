<script setup lang="ts">
import { computed } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

interface Option {
  id: string | number
  label: string
  value: string | number
}

const props = defineProps<{
  modelValue: string | number | null
  options: Option[]
  label?: string
  id?: string
  placeholder?: string
  error?: string
  disabled?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
const selected = computed({
  get: () => props.options.find((opt) => opt.value === props.modelValue),
  set: (option) => emit('update:modelValue', option!.value),
})
</script>

<template>
  <div class="w-full">
    <Listbox v-model="selected" :key="selected?.id">
      <div class="relative">
        <ListboxLabel
          v-if="label"
          :class="[
            disabled && 'opacity-50',
            error ? 'text-red-500' : 'text-gray-900',
            'block text-sm font-medium mb-1',
          ]"
        >
          {{ label }}
        </ListboxLabel>

        <ListboxButton
          :disabled="disabled"
          :class="[
            disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
            error
              ? 'border border-red-500 focus:ring-red-500 focus:border-red-500'
              : 'border border-gray-300 focus:ring-deep-ocean focus:border-deep-ocean',
            'relative w-full h-10 rounded-md bg-white  py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1  sm:text-sm',
          ]"
        >
          <span class="block truncate capitalize">
            {{ selected?.label || placeholder }}
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              :class="[error ? 'text-red-500' : 'text-gray-400', 'h-5 w-5 text-gray-400']"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg outline-gray-200 focus:outline-1 sm:text-sm"
        >
          <ListboxOption
            v-for="option in options"
            :key="option.id"
            :value="option"
            class="{ 'bg-ice-mist text-frost-blue': active, 'text-gray-700': !active }"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                selected && 'bg-deep-ocean text-sky-steel',
                !selected && active ? 'bg-ice-mist text-frost-blue' : 'text-gray-700',
                'relative cursor-pointer select-none py-2 pl-10 pr-4',
              ]"
            >
              <span
                :class="[selected ? 'font-semibold' : 'font-medium', 'block truncate capitalize']"
              >
                {{ option.label }}
              </span>

              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-frost-blue"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </Listbox>
    <div v-if="error" class="text-base text-red-500">
      {{ error }}
    </div>
  </div>
</template>
