import React, { FC } from 'react'
import { List, Space, Typography } from 'antd'
import { usePopularRepoApi } from '../../infra/useApi'
import { Repository } from '../../domain/Github/Repository'
import { LikeOutlined, StarOutlined } from '@ant-design/icons'

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
      ></List>
    </section>
  )
}

type RepositoryListItemProps = {
  repository: Repository
}

export const RepositoryListItem: FC<RepositoryListItemProps> = ({
  repository: { name, description, stargazers_count, watchers_count, owner },
}) => {
  return (
    <List.Item
      actions={[
        <IconText icon={StarOutlined} text={stargazers_count} key="star" />,
        <IconText icon={LikeOutlined} text={watchers_count} key="watchers" />,
      ]}
      extra={<img width={272} alt="user avatar" src={owner.avatar_url} />}
    >
      <List.Item.Meta title={name} description={description}></List.Item.Meta>
      {description}
    </List.Item>
  )
}

const IconText = ({ icon, text }: { icon: any; text: string | number }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)
