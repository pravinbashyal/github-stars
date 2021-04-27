import { usePopularRepoApi } from './infra/usePopularRepoApi'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { PopularRepo } from '.'
import { repositoryFactory } from '../../common-domain/Github/__fixtures__/repositoryFactory'
import { Wrapper } from '../../testSetup/wrapper'
import { useFavoritesApi } from '../Favorites/infra/useFavoritesApi'

jest.mock('./infra/usePopularRepoApi')
jest.mock('../Favorites/infra/useFavoritesApi')

const repositories = repositoryFactory.buildList(3)

const setup = (props = {}) => {
  const defaultProps = {}
  return render(<PopularRepo {...defaultProps} {...props}></PopularRepo>, {
    wrapper: Wrapper,
  })
}

describe('<PopularRepo/>', () => {
  beforeEach(() => {
    usePopularRepoApi.mockImplementation(() => ({
      isFetching: false,
      data: repositories,
    }))

    useFavoritesApi.mockImplementation(() => ({
      isFavorite: jest.fn(),
      toggleFavorites: jest.fn(),
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

  test('shows loader while fetching', () => {
    // @ts-ignore
    usePopularRepoApi.mockImplementation(() => ({
      isFetching: true,
      data: undefined,
    }))
    const { container } = setup()
    const spinner = container.querySelector('i.ant-spin-dot-item')
    expect(spinner).toBeInTheDocument()
  })

  test('doesnt show loader while not fetching', () => {
    // @ts-ignore
    usePopularRepoApi.mockImplementation(() => ({
      isFetching: false,
      data: [],
    }))
    const { container } = setup()
    const spinner = container.querySelector('i.ant-spin-dot-item')
    expect(spinner).not.toBeInTheDocument()
  })

  test('lists fetched repositories', () => {
    const repositories = repositoryFactory.buildList(3)
    usePopularRepoApi.mockImplementation(() => ({
      isFetching: false,
      data: repositories,
    }))
    setup()
    repositories.forEach((repository) => {
      const repositoryTitle = screen.getByRole('heading', { name: repository.name })
      expect(repositoryTitle).toBeInTheDocument()
    })
  })

  test('calls toggleFavorites star click', () => {
    const repository = repositoryFactory.build()
    const toggleFavorites = jest.fn()
    // @ts-ignore
    usePopularRepoApi.mockImplementation(() => ({
      isFetching: false,
      data: [repository],
    }))
    useFavoritesApi.mockImplementation(() => ({
      isFavorite: jest.fn(() => false),
      toggleFavorites,
    }))
    setup()

    const starButton = screen.getByRole('button', {
      name: `star ${repository.name}`,
    })

    userEvent.click(starButton)

    expect(toggleFavorites).toHaveBeenCalledWith(repository)
  })
})
