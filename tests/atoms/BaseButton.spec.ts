import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '@/components/atoms/BaseButton.vue'

describe('BaseButton', () => {
  it('renders with default props', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me',
      },
    })

    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.attributes('type')).toBeUndefined()
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('renders with custom type', () => {
    const wrapper = mount(BaseButton, {
      props: {
        type: 'submit',
      },
    })

    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('applies primary variant class by default', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'primary',
      },
    })

    expect(wrapper.classes()).toContain('bg-deep-ocean')
    expect(wrapper.classes()).toContain('text-white')
    expect(wrapper.classes()).toContain('hover:bg-frost-blue')
  })

  it('applies secondary variant class', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'secondary',
      },
    })

    expect(wrapper.classes()).toContain('bg-gray-100')
    expect(wrapper.classes()).toContain('text-gray-800')
    expect(wrapper.classes()).toContain('hover:bg-gray-300')
    expect(wrapper.classes()).toContain('border')
    expect(wrapper.classes()).toContain('border-gray-300')
  })

  it('applies danger variant class', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'danger',
      },
    })

    expect(wrapper.classes()).toContain('bg-red-600')
    expect(wrapper.classes()).toContain('text-white')
    expect(wrapper.classes()).toContain('hover:bg-red-700')
  })

  it('handles disabled state', () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('disabled:opacity-50')
    expect(wrapper.classes()).toContain('disabled:pointer-events-none')
  })

  it('emits click event when clicked and not disabled', async () => {
    const wrapper = mount(BaseButton)

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')![0]).toHaveLength(1)
    expect(wrapper.emitted('click')![0][0]).toBeInstanceOf(MouseEvent)
  })

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true,
      },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('calls onClick handler with MouseEvent', async () => {
    const wrapper = mount(BaseButton)

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')![0][0]).toBeInstanceOf(MouseEvent)
  })

  it('renders slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: '<span>Custom Content</span>',
      },
    })

    expect(wrapper.html()).toContain('<span>Custom Content</span>')
  })

  it('combines all prop variants correctly', () => {
    const wrapper = mount(BaseButton, {
      props: {
        type: 'submit',
        variant: 'danger',
        disabled: false,
      },
      slots: {
        default: 'Submit',
      },
    })

    expect(wrapper.attributes('type')).toBe('submit')
    expect(wrapper.classes()).toContain('bg-red-600')
    expect(wrapper.text()).toBe('Submit')
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })
})
