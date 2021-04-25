import { useEffect, useState } from 'react'
import { Repository } from '../domain/Github/Repository'
import { RequestStates } from '../domain/Infra/Api'

export const usePopularRepoApi = (
  { page } = {
    page: 0,
  }
): RequestStates<Repository[]> => {
  const [isFetching, setIsFetching] = useState(false)
  const [popularRepo, setPopularRepo] = useState<Repository[]>([])
  const [error, setError] = useState()
  useEffect(() => {
    setIsFetching(true)
    const fetchPopularRepo = async () => {
      try {
        const popularRepoRes = await fetch(
          'https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc'
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
