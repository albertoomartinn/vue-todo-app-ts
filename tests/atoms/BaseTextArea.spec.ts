import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseTextarea from '@/components/atoms/BaseTextArea.vue'

describe('BaseTextarea Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(BaseTextarea, {
      props: {
        id: 'test-textarea',
        name: 'test-name',
        labelName: 'Test Label',
        modelValue: 'Test value',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props().labelName).toBe('Test Label')
  })

  it('emits update:modelValue on input', () => {
    const wrapper = mount(BaseTextarea, {
      props: {
        id: 'test-textarea',
        name: 'test-name',
        labelName: 'Test Label',
        modelValue: '',
      },
    })

    wrapper.vm.$emit('update:modelValue', 'New value')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['New value'])
  })
})
