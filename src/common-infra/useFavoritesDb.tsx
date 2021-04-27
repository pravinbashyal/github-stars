import { values } from 'lodash-es'
import { createContext, useContext } from 'react'
import { FavoritesDb } from '../common-domain/FavoritesDb'
import { Repository } from '../common-domain/Github/Repository'
import { useLocalStorage } from './useLocalStorage'

const FavoritesDbContext = createContext<{
  favorites: FavoritesDb
  setFavorites: (favorites: FavoritesDb) => {}
}>(undefined)

export const FavoritesDbProvider = ({ children }) => {
  const initialValueFromStorageSerialized = localStorage.getItem('favorites')
  const initialValue = initialValueFromStorageSerialized
    ? JSON.parse(initialValueFromStorageSerialized)
    : undefined
  const [favorites, setFavorites] = useLocalStorage('favorites', initialValue)
  return (
    <FavoritesDbContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesDbContext.Provider>
  )
}

export const useFavoritesDb = () => {
  const favoritesDb = useContext(FavoritesDbContext)
  if (!favoritesDb) {
    throw Error('useFavoritesDb should be called inside the scope of FavoritesDbProvider')
  }

  const get = (repoId: string) => {
    const repository = favoritesDb.favorites[repoId]
    if (!repository) {
      return new Error('cannot find repository in db')
    }
    return repository
  }

  const getAll = () => {
    values(favoritesDb.favorites)
  }

  const deleteRepo = (id: string) => {
    favoritesDb.setFavorites({ ...favoritesDb.favorites, [id]: undefined })
  }

  const add = (repo: Repository) => {
    favoritesDb.setFavorites({ ...favoritesDb.favorites, [repo.id]: repo })
  }

  return { get, getAll, deleteRepo, add }
}
