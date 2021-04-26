import '../../testSetup/mock/matchMedia.mock'
import { usePopularRepoApi } from '../../infra/useApi'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { PopularRepo } from '.'
import { repositoryFactory } from '../../domain/Github/__fixtures__/repositoryFactory'
import { Wrapper } from '../../testSetup/wrapper'

jest.mock('../../infra/useApi')

const repositories = repositoryFactory.buildList(3)

const setup = (props = {}) => {
  const defaultProps = {}
  render(<PopularRepo {...defaultProps} {...props}></PopularRepo>, {
    wrapper: Wrapper,
  })
}

describe('Popular', () => {
  beforeEach(() => {
    usePopularRepoApi.mockImplementation(() => ({
      isFetching: false,
      data: repositories,
    }))
  })

  test('renders popular', () => {
    setup()
    expect(screen.getByRole('heading', { name: 'Popular Repositories' })).toBeInTheDocument()
  })

  test('lists popular repositories', () => {
    setup()
    repositories.forEach(({ name }) => {
      const repositoryName = screen.getByRole('heading', { name })
      expect(repositoryName).toBeInTheDocument()
    })
  })
})
