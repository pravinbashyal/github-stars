import React, { FC } from 'react'
import { List } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { IconText } from '../../../common-components/IconText'
import { Repository } from '../../../common-domain/Github/Repository'
import { Star } from './Star'

export type RepositoryListItemProps = {
  repository: Repository
}

const TitleLink = ({ to, label }: { to: string; label: string }) => <a href={to}>{label}</a>

export const RepositoryListItem: FC<RepositoryListItemProps> = ({ repository }) => {
  const { name, description, stargazers_count, watchers_count, owner, html_url = '' } = repository
  return (
    <List.Item
      actions={[
        <Star onClick={console.log} isSelected={false} count={stargazers_count} key="star"></Star>,
        <IconText text={watchers_count} key="watchers" renderIcon={() => <EyeOutlined />} />,
      ]}
      extra={<img width={272} alt="user avatar" src={owner.avatar_url} />}
    >
      <List.Item.Meta title={<TitleLink to={html_url} label={name} />} description={description}></List.Item.Meta>
      {description}
    </List.Item>
  )
}
