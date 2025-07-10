import TheHeader from './TheHeader.vue'
import type { StoryFn } from '@storybook/vue3'

export default {
  title: 'Organisms/TheHeader',
  component: TheHeader,
  args: {
    title: 'Dashboard',
  },
}
interface TheHeaderArgs {
  title: string
}

const Template: StoryFn<TheHeaderArgs> = (args) => ({
  components: { TheHeader },
  setup() {
    return { args }
  },
  template: `<TheHeader v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  title: 'Tareas importantes',
}
