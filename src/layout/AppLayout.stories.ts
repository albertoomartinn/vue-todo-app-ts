import AppLayout from './AppLayout.vue'
import type { StoryFn } from '@storybook/vue3'

export default {
  title: 'Layouts/AppLayout',
  component: AppLayout,
}

const Template: StoryFn<unknown> = (args) => ({
  components: { AppLayout },
  setup() {
    return { args }
  },
  template: `
    <AppLayout v-bind="args">
      <template #default>
        <div class="p-4 bg-white rounded shadow text-center">
          Aquí va el contenido principal del layout
        </div>
      </template>
    </AppLayout>
  `,
})

export const Default = Template.bind({})
Default.args = {}
