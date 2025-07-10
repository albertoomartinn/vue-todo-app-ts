import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseModal from '@/components/atoms/BaseModal.vue'

describe('BaseModal Component', () => {
  it('renders with correct props', () => {
    const wrapper = mount(BaseModal, {
      props: {
        show: true,
        title: 'Test Modal',
      },
    })

    expect(wrapper.props().show).toBe(true)
    expect(wrapper.props().title).toBe('Test Modal')
  })

  it('emits close event when called', () => {
    const wrapper = mount(BaseModal, {
      props: {
        show: true,
      },
    })

    wrapper.vm.$emit('close')

    expect(wrapper.emitted()).toHaveProperty('close')
    expect(wrapper.emitted().close).toHaveLength(1)
  })

  it('has slot content configured', () => {
    const wrapper = mount(BaseModal, {
      props: {
        show: true,
      },
      slots: {
        default: '<div class="test-content">Modal content</div>',
      },
    })

    expect(wrapper.vm.$slots.default).toBeDefined()
  })
})
