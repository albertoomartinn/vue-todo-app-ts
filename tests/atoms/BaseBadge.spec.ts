import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseBadge from '@/components/atoms/BaseBadge.vue'

describe('BaseBadge.vue', () => {
  it('displays the title correctly', () => {
    const wrapper = mount(BaseBadge, {
      props: {
        title: 'En progreso',
        color: 'yellow',
      },
    })
    expect(wrapper.text()).toBe('En progreso')
  })

  it('applies the correct classes for each color', () => {
    const colors = {
      yellow: 'bg-yellow-100 text-yellow-700 ring-yellow-700/10',
      red: 'bg-red-100 text-red-700 ring-red-700/10',
      green: 'bg-green-100 text-green-700 ring-green-700/10',
      gray: 'bg-gray-100 text-gray-700 ring-gray-700/10',
    }

    for (const [color, expectedClass] of Object.entries(colors)) {
      const wrapper = mount(BaseBadge, {
        props: {
          title: 'Test',
          color: color as 'yellow' | 'red' | 'green' | 'gray',
        },
      })

      const span = wrapper.get('span')
      expect(span.classes()).toContain(expectedClass.split(' ')[0])
    }
  })
})
