import React, { FC } from 'react'
import { List } from 'antd'
import { EyeOutlined, StarOutlined } from '@ant-design/icons'
import { IconText } from './index'
import { Repository } from '../../domain/Github/Repository'
import { Link } from 'react-router-dom'

export type RepositoryListItemProps = {
  repository: Repository
}

const TitleLink = ({ to, label }: { to: string; label: string }) => <Link to="/">{label}</Link>

export const RepositoryListItem: FC<RepositoryListItemProps> = ({
  repository: { name, description, stargazers_count, watchers_count, owner },
}) => {
  return (
    <List.Item
      actions={[
        <IconText icon={StarOutlined} text={stargazers_count} key="star" />,
        <IconText icon={EyeOutlined} text={watchers_count} key="watchers" />,
      ]}
      extra={<img width={272} alt="user avatar" src={owner.avatar_url} />}
    >
      <List.Item.Meta title={<TitleLink to="/" label={name} />} description={description}></List.Item.Meta>
      {description}
    </List.Item>
  )
}
