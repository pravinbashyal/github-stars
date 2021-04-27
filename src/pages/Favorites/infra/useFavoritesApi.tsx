import { Repository } from '../../../common-domain/Github/Repository'
import { useFavoritesDb } from '../../../common-infra/useFavoritesDb'

export const useFavoritesApi = () => {
  const favoritesDb = useFavoritesDb()
  const favorites = favoritesDb.getAll() as Repository[]

  const isFavorite = (repositoryId: string) => !!favoritesDb.get(repositoryId)

  const addToFavorites = favoritesDb.add
  const removeFromFavorites = favoritesDb.deleteValue
  const toggleFavorites = (repo: Repository) => {
    if (favoritesDb.get(repo.id)) {
      removeFromFavorites(repo.id)
      return
    }

    addToFavorites(repo)
  }

  return {
    favorites,
    isFavorite,
    toggleFavorites,
  }
}
