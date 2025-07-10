import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import TaskList from '@/components/organisms/TaskList.vue'

interface TaskListInstance {
  filterOptions: Array<{ label: string }>
  filterOption: string | null
  clearFilter: () => void
}

describe('TaskList Component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly', () => {
    const wrapper = mount(TaskList)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Filter by')
    expect(wrapper.text()).toContain('Clear filter')
  })

  it('shows no data message when no tasks', () => {
    const wrapper = mount(TaskList)

    expect(wrapper.text()).toContain('No data')
  })

  it('has correct filter options', () => {
    const wrapper = mount(TaskList)
    const component = wrapper.vm as unknown as TaskListInstance

    expect(component.filterOptions).toHaveLength(4)
    expect(component.filterOptions[0].label).toBe('Completed')
    expect(component.filterOptions[1].label).toBe('Pending')
  })

  it('clears filter when clearFilter is called', () => {
    const wrapper = mount(TaskList)
    const component = wrapper.vm as unknown as TaskListInstance

    component.filterOption = 'completed'
    component.clearFilter()

    expect(component.filterOption).toBeNull()
  })
})
