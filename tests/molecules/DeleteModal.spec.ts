import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DeleteModal from '@/components/molecules/DeleteModal.vue'

describe('DeleteModal Component', () => {
  it('renders with correct props', () => {
    const wrapper = mount(DeleteModal, {
      props: {
        show: true,
        title: 'Delete',
        message: 'Are you sure?',
      },
    })

    expect(wrapper.props().show).toBe(true)
    expect(wrapper.props().title).toBe('Delete')
    expect(wrapper.props().message).toBe('Are you sure?')
  })

  it('emits delete event', () => {
    const wrapper = mount(DeleteModal, {
      props: {
        show: true,
      },
    })

    wrapper.vm.$emit('delete')

    expect(wrapper.emitted()).toHaveProperty('delete')
    expect(wrapper.emitted().delete).toHaveLength(1)
  })

  it('emits cancel event', () => {
    const wrapper = mount(DeleteModal, {
      props: {
        show: true,
      },
    })

    wrapper.vm.$emit('cancel')

    expect(wrapper.emitted()).toHaveProperty('cancel')
    expect(wrapper.emitted().cancel).toHaveLength(1)
  })
})
