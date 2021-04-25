import React from 'react'
import { render, screen } from '@testing-library/react'

import { Favorites } from './index'

const setup = (props: {}) => {
  const defaultProps = {}
  render(<Favorites {...defaultProps} {...props}></Favorites>)
}

describe('Favorites', () => {
  test('renders favorites section', () => {
    setup()
    expect(screen.getByRole('heading', { name: 'Favorites' })).toBeInTheDocument()
  })
})
