import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { Repository } from '../../../common-domain/Github/Repository'
import { RequestStates } from '../../../common-domain/Infra/Api'
import { SearchParams, SortBy, SortOrder } from '../../../common-domain/Infra/SearchParams'
import { toApiSearchParams } from '../../../common-domain/Infra/SearchParamsMappers'

export const usePopularRepoApi = ({ page }: Partial<SearchParams>): RequestStates<Repository[]> => {
  const [isFetching, setIsFetching] = useState(false)
  const [popularRepo, setPopularRepo] = useState<Repository[]>([])
  const [error, setError] = useState<string | undefined>()
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
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        const formattedDate = format(sevenDaysAgo, 'yyyy-MM-dd')
        const popularRepoRes = await fetch(
          `https://api.github.com/search/repositories?q=created:>=${formattedDate}&${urlSearchParams}`
        )
        const popularRepo = await popularRepoRes.json()
        setPopularRepo(popularRepo.items)
      } catch (e) {
        setError('could not fetch repository')
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
