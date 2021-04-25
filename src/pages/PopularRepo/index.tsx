import React from 'react'
import { Card, Typography } from 'antd'
import { usePopularRepoApi } from '../../infra/useApi'

const { Title } = Typography

const sectionId = 'popular-repositories-header'

export const PopularRepo = () => {
  const { isFetching, data: repositories, error } = usePopularRepoApi({
    page: 0,
    perPage: 10,
  })
  console.log({ repositories, isFetching, error })
  return (
    <section aria-labelledby={sectionId}>
      <Title level={2} id={sectionId}>
        Popular Repositories
      </Title>
      {repositories.map(({ name: repo }) => (
        <Card key={repo} title={repo}>
          {repo}
        </Card>
      ))}
    </section>
  )
}
