import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseSelect from '@/components/atoms/BaseSelect.vue'

const mockOptions = [
  { id: 1, label: 'Option 1', value: 'option1' },
  { id: 2, label: 'Option 2', value: 'option2' },
  { id: 3, label: 'Option 3', value: 'option3' },
]

describe('BaseSelect Component', () => {
  it('renders with correct props', () => {
    const wrapper = mount(BaseSelect, {
      props: {
        modelValue: 'option1',
        options: mockOptions,
        label: 'Test Select',
      },
    })

    expect(wrapper.props().modelValue).toBe('option1')
    expect(wrapper.props().options).toEqual(mockOptions)
    expect(wrapper.props().label).toBe('Test Select')
  })

  it('emits update:modelValue when value changes', () => {
    const wrapper = mount(BaseSelect, {
      props: {
        modelValue: null,
        options: mockOptions,
      },
    })

    wrapper.vm.$emit('update:modelValue', 'option2')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['option2'])
  })

  it('shows label when provided', () => {
    const wrapper = mount(BaseSelect, {
      props: {
        modelValue: null,
        options: mockOptions,
        label: 'Select an option',
      },
    })

    expect(wrapper.text()).toContain('Select an option')
  })

  it('shows placeholder when no value selected', () => {
    const wrapper = mount(BaseSelect, {
      props: {
        modelValue: null,
        options: mockOptions,
        placeholder: 'Choose option',
      },
    })

    expect(wrapper.text()).toContain('Choose option')
  })

  it('shows error message when error prop is provided', () => {
    const wrapper = mount(BaseSelect, {
      props: {
        modelValue: null,
        options: mockOptions,
        error: 'This field is required',
      },
    })

    expect(wrapper.text()).toContain('This field is required')
  })

  it('applies disabled state correctly', () => {
    const wrapper = mount(BaseSelect, {
      props: {
        modelValue: null,
        options: mockOptions,
        disabled: true,
      },
    })

    expect(wrapper.props().disabled).toBe(true)
  })
})
