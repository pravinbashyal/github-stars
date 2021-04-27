import React, { FC } from 'react'
import { List } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { Repository } from '../common-domain/Github/Repository'
import { IconText } from './IconText'
import { StarButton } from '../pages/PopularRepo/views/StarButton'

export type RepositoryListItemProps = {
  repository: Repository
  toggleFavorites: (repo: Repository) => void
  isFavorite: boolean
}

const TitleLink = ({ to, label }: { to: string; label: string }) => <a href={to}>{label}</a>

export const RepositoryListItem: FC<RepositoryListItemProps> = ({
  repository,
  isFavorite,
  toggleFavorites,
}) => {
  const { name, description, stargazers_count, watchers_count, owner, html_url = '' } = repository
  return (
    <List.Item
      actions={[
        <StarButton
          onClick={() => toggleFavorites(repository)}
          isSelected={isFavorite}
          count={stargazers_count}
          key="star"
          label={`star ${repository.name}`}
        ></StarButton>,
        <IconText text={watchers_count} key="watchers" renderIcon={() => <EyeOutlined />} />,
      ]}
      extra={<img width={272} alt="user avatar" src={owner.avatar_url} />}
    >
      <List.Item.Meta
        title={<TitleLink to={html_url} label={name} />}
        description={description}
      ></List.Item.Meta>
      {description}
    </List.Item>
  )
}
