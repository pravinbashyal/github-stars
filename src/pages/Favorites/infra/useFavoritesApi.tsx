import { useFavoritesDb } from '../../../common-infra/useFavoritesDb'

export const useFavoritesApi = () => {
  const { getAll, get } = useFavoritesDb()
  const favorites = getAll()

  const isFavorite = (repositoryId: string) => !!get(repositoryId)

  return {
    favorites,
    isFavorite,
  }
}
