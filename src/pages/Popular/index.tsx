import React from 'react'
import { Card, Typography } from 'antd'
import { usePopularRepoApi } from '../../infra/useApi'

const { Title } = Typography

export const PopularRepo = () => {
  const { isFetching, data, error } = usePopularRepoApi({
    page: 0,
    perPage: 10,
  })
  return (
    <section>
      <Title level={2}>Popular Repositories</Title>
      {['repo'].map((repo) => (
        <Card key={repo} title={repo}>
          {repo}
        </Card>
      ))}
    </section>
  )
}
