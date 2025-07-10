import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheHeader from '@/components/organisms/TheHeader.vue'

describe('TheHeader Component', () => {
  it('renders with correct props', () => {
    const wrapper = mount(TheHeader, {
      props: {
        title: 'Task Manager',
      },
    })

    expect(wrapper.props().title).toBe('Task Manager')
  })
})
