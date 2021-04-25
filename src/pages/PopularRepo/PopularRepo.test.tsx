import { render, screen } from '@testing-library/react'
import React from 'react'
import { PopularRepo } from '.'

const setup = (props: {}) => {
  const defaultProps = {}
  render(<PopularRepo {...defaultProps} {...props}></PopularRepo>)
}

describe('Popular', () => {
  test('renders popular', () => {
    setup()
    expect(screen.getByRole('heading', { name: 'Popular Repositories' })).toBeInTheDocument()
  })
})
