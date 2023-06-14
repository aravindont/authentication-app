import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    radius: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    label: 'Primary',
    radius: 'lg',
  },
}
