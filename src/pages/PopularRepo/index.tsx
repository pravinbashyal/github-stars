import React from 'react'
import { List, Space, Typography } from 'antd'
import { usePopularRepoApi } from '../../infra/useApi'
import { RepositoryListItem } from './RepositoryListItem'

const { Title } = Typography

const sectionId = 'popular-repositories-header'

export const PopularRepo = () => {
  const { isFetching, data: repositories, error } = usePopularRepoApi({
    page: 0,
    perPage: 10,
  })
  return (
    <section aria-labelledby={sectionId}>
      <Title level={2} id={sectionId}>
        Popular Repositories
      </Title>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={repositories}
        renderItem={(repository) => (
          <RepositoryListItem repository={repository} key={repository.id}></RepositoryListItem>
        )}
        loading={isFetching}
        bordered
        style={{
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></List>
    </section>
  )
}

export const IconText = ({ icon, text }: { icon: any; text: string | number }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)
