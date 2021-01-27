import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Game Store/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Game Store/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Game Store/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Game Store/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Game Store/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
