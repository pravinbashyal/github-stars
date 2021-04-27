import React from 'react'
import { Typography } from 'antd'
import { usePopularRepoApi } from './infra/usePopularRepoApi'
import { useAddErrorAlert } from '../../common-components/Alert/state/useAlert'
import { RepositoryList } from '../../common-components/RepositoryList'

const { Title } = Typography

const sectionId = 'popular-repositories-header'

export const PopularRepo = () => {
  const { isFetching, data: repositories, error } = usePopularRepoApi({
    page: 0,
    perPage: 10,
  })

  useAddErrorAlert(error)

  return (
    <section aria-labelledby={sectionId}>
      <Title level={2} id={sectionId}>
        Popular Repositories
      </Title>
      <RepositoryList isFetching={isFetching} repositories={repositories}></RepositoryList>
    </section>
  )
}
