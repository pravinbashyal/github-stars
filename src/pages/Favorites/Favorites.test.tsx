import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import { Favorites } from './index'
import { Wrapper } from '../../testSetup/wrapper'
import { fromPairs } from 'lodash-es'
import { repositoryFactory } from '../../common-domain/Github/__fixtures__/repositoryFactory'
import userEvent from '@testing-library/user-event'

const setup = () => {
  render(<Favorites></Favorites>, { wrapper: Wrapper })
}

const mockLocalStorageValues = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

describe('Favorites', () => {
  test('renders favorites section', () => {
    setup()
    expect(screen.getByRole('heading', { name: 'Favorites' })).toBeInTheDocument()
  })

  test('lists favorite repositories', () => {
    const repositories = repositoryFactory.buildList(3)

    const normalizedRepositories = fromPairs(
      repositories.map((repository) => [repository.id, repository])
    )
    mockLocalStorageValues('favorites', normalizedRepositories)
    setup()
    repositories.forEach((repository) => {
      const repositoryTitle = screen.getByRole('heading', { name: repository.name })
      expect(repositoryTitle).toBeInTheDocument()
    })
  })

  const repoList = () => {
    const lists = screen.getAllByRole('list')
    // no definite way to find closest ul because antd wraps it inside couple of divs,
    // and doing specific query is adding test's dependency in implementation details
    const repoRootList = lists[0]
    const listItems = repoRootList.children
    return listItems
  }

  test('unfavorites repositories on star click and removes the tile from list', async () => {
    const repositories = repositoryFactory.buildList(3)
    const repository = repositories[0]

    const normalizedRepositories = fromPairs(
      repositories.map((repository) => [repository.id, repository])
    )
    mockLocalStorageValues('favorites', normalizedRepositories)
    setup()
    expect(repoList()).toHaveLength(3)
    expect(screen.queryByRole('heading', { name: repository.name })).toBeInTheDocument()

    const starButton = screen.getByRole('button', {
      name: `star ${repository.name}`,
    })
    userEvent.click(starButton)
    expect(repoList()).toHaveLength(2)
    expect(screen.queryByRole('heading', { name: repository.name })).not.toBeInTheDocument()
  })
})
