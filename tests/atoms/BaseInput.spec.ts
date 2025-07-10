import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseInput from '@/components/atoms/BaseInput.vue'

describe('BaseInput.vue', () => {
  const baseProps = {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Ingresa tu correo',
    modelValue: '',
  }

  it('renders the input with basic props', () => {
    const wrapper = mount(BaseInput, {
      props: baseProps,
    })

    const input = wrapper.get('input')
    expect(input.attributes('type')).toBe('email')
    expect(input.attributes('name')).toBe('email')
    expect(input.attributes('placeholder')).toBe('Ingresa tu correo')
  })

  it('shows the label if labelName is provided', () => {
    const wrapper = mount(BaseInput, {
      props: {
        ...baseProps,
        labelName: 'Correo electrónico',
      },
    })

    expect(wrapper.text()).toContain('Correo electrónico')
  })

  it('emits update:modelValue when typing in the input', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        ...baseProps,
      },
    })

    const input = wrapper.get('input')
    await input.setValue('usuario@example.com')

    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue']![0]).toEqual(['usuario@example.com'])
  })

  it('shows an error message if error prop exists', () => {
    const wrapper = mount(BaseInput, {
      props: {
        ...baseProps,
        error: 'Este campo es obligatorio',
      },
    })

    expect(wrapper.text()).toContain('Este campo es obligatorio')
    const input = wrapper.get('input')
    expect(input.classes()).toContain('outline-red-500')
  })
})
