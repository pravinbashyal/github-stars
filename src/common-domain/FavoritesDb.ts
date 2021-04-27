import { Repository } from './Github/Repository'

export type FavoritesDb = Record<string, Repository | undefined>
