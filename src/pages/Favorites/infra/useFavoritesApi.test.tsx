import { act, renderHook } from '@testing-library/react-hooks'
import { Wrapper } from '../../../testSetup/wrapper'
import { useFavoritesApi } from './useFavoritesApi'

import { repositoryFactory } from '../../../common-domain/Github/__fixtures__/repositoryFactory'
import { fromPairs } from 'lodash-es'

const setup = () => {
  const { result } = renderHook(() => useFavoritesApi(), { wrapper: Wrapper })
  return result
}

describe('useFavoritesApi', () => {
  test('returns isFavorite true for available favorites', () => {
    const repositories = repositoryFactory.buildList(4)
    const normalizedRepositories = fromPairs(
      repositories.map((repository) => [repository.id, repository])
    )
    window.localStorage.setItem('favorites', JSON.stringify(normalizedRepositories))
    const result = setup()
    expect(result.current.isFavorite(repositories[0].id)).toBeTruthy()
  })

  test('toggle deletes from favorites if the value is present', () => {
    const repositories = repositoryFactory.buildList(4)
    const testRepository = repositories[0]
    const normalizedRepositories = fromPairs(
      repositories.map((repository) => [repository.id, repository])
    )
    window.localStorage.setItem('favorites', JSON.stringify(normalizedRepositories))
    const result = setup()
    act(() => result.current.toggleFavorites(testRepository))

    expect(result.current.isFavorite(testRepository.id)).toBeFalsy()
  })

  test('toggle adds to favorites if the value is not present', () => {
    const repositories = []
    const testRepository = repositoryFactory.build()
    window.localStorage.setItem('favorites', JSON.stringify(repositories))
    const result = setup()
    act(() => result.current.toggleFavorites(testRepository))

    expect(result.current.isFavorite(testRepository.id)).toBeTruthy()
  })
})
