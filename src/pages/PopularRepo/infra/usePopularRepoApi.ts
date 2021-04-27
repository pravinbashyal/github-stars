import { useEffect, useState } from 'react'
import { Repository } from '../../../domain/Github/Repository'
import { RequestStates } from '../../../domain/Infra/Api'
import { SearchParams, SortBy, SortOrder } from '../../../domain/Infra/SearchParams'
import { toApiSearchParams } from '../../../domain/Infra/SearchParamsMappers'

export const usePopularRepoApi = ({ page }: Partial<SearchParams>): RequestStates<Repository[]> => {
  const [isFetching, setIsFetching] = useState(false)
  const [popularRepo, setPopularRepo] = useState<Repository[]>([])
  const [error, setError] = useState()
  useEffect(() => {
    setIsFetching(true)

    const defaultParams = {
      page: 0,
      perPage: 50,
      sortOrder: SortOrder.Descending,
      sortBy: SortBy.Stars,
    }
    const urlSearchParams = new URLSearchParams(
      toApiSearchParams({
        ...defaultParams,
        page,
      })
    )
    const fetchPopularRepo = async () => {
      try {
        const popularRepoRes = await fetch(
          `https://api.github.com/search/repositories?q=created:>2021-03-25&${urlSearchParams}`
        )
        const popularRepo = await popularRepoRes.json()
        setPopularRepo(popularRepo.items)
      } catch (e) {
        setError(e)
      } finally {
        setIsFetching(false)
      }
    }
    fetchPopularRepo()
  }, [page])
  return {
    isFetching,
    data: popularRepo,
    error,
  }
}
