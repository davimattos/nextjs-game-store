import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render a medium size by default', () => {
    const { container } = renderWithTheme(<Button>Click Me</Button>)
    expect(screen.getByRole('button', { name: /Click Me/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a large size when props is passed', () => {
    renderWithTheme(<Button size="large">Click Me</Button>)
    expect(screen.getByRole('button', { name: /Click Me/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a small size when props is passed', () => {
    renderWithTheme(<Button size="small">Click Me</Button>)
    expect(screen.getByRole('button', { name: /Click Me/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render a full width version', () => {
    renderWithTheme(<Button fullWidth>Click Me</Button>)
    expect(screen.getByRole('button', { name: /Click Me/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render with icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Click Me</Button>
    )

    expect(screen.getByText(/click me/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
