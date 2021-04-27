import React, { useEffect } from 'react'
import { List, Space, Typography } from 'antd'
import { usePopularRepoApi } from './infra/usePopularRepoApi'
import { RepositoryListItem } from './views/RepositoryListItem'
import { useAddErrorAlert } from '../../common-components/Alert/state/useAlert'

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
