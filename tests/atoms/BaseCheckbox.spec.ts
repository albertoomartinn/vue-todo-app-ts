import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseCheckbox from '@/components/atoms/BaseCheckbox.vue'

describe('BaseCheckbox', () => {
  it('renders correctly', () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        id: 'test-checkbox',
        modelValue: false,
      },
    })

    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
    expect(wrapper.find('input').attributes('id')).toBe('test-checkbox')
  })

  it('shows label when provided', () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        id: 'test-checkbox',
        label: 'Test Label',
        modelValue: false,
      },
    })

    expect(wrapper.text()).toContain('Test Label')
  })

  it('is checked when modelValue is true', () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        id: 'test-checkbox',
        modelValue: true,
      },
    })

    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('is unchecked when modelValue is false', () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        id: 'test-checkbox',
        modelValue: false,
      },
    })

    expect(wrapper.find('input').element.checked).toBe(false)
  })

  it('emits update:modelValue when clicked', async () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        id: 'test-checkbox',
        modelValue: false,
      },
    })

    await wrapper.find('input').trigger('change')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
