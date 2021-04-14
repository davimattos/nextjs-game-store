import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Heading>Game Store</Heading>)

    expect(screen.getByRole('heading', { name: /game store/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label', () => {
    renderWithTheme(<Heading color="black">Game Store</Heading>)

    expect(screen.getByRole('heading', { name: /game store/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line at the left side', () => {
    renderWithTheme(<Heading lineLeft>Game Store</Heading>)

    expect(screen.getByRole('heading', { name: /game store/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Game Store</Heading>)

    expect(
      screen.getByRole('heading', { name: /game store/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Game Store</Heading>)

    expect(
      screen.getByRole('heading', { name: /game store/i })
    ).toHaveStyleRule('font-size', '1.6rem')

    expect(
      screen.getByRole('heading', { name: /game store/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a medium size', () => {
    renderWithTheme(<Heading size="medium">Game Store</Heading>)

    expect(
      screen.getByRole('heading', { name: /game store/i })
    ).toHaveStyleRule('font-size', '2.0rem')
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Game Store
      </Heading>
    )

    expect(
      screen.getByRole('heading', { name: /game store/i })
    ).toHaveStyleRule('border-left', '0.7rem solid #3CD3C1')
    expect(
      screen.getByRole('heading', { name: /game store/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
