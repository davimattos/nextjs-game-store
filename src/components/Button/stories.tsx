import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Click Me'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Click Me',
  icon: <AddShoppingCart />
}
