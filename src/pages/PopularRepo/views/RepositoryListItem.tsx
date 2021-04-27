import { FC } from 'react'
import { List } from 'antd'
import { EyeOutlined, StarOutlined } from '@ant-design/icons'
import { IconText } from '../index'
import { Repository } from '../../../domain/Github/Repository'

export type RepositoryListItemProps = {
  repository: Repository
}

const TitleLink = ({ to, label }: { to: string; label: string }) => <a href={to}>{label}</a>

export const RepositoryListItem: FC<RepositoryListItemProps> = ({ repository }) => {
  const { name, description, stargazers_count, watchers_count, owner, html_url = '' } = repository
  console.log({ html_url })
  return (
    <List.Item
      actions={[
        <IconText icon={StarOutlined} text={stargazers_count} key="star" />,
        <IconText icon={EyeOutlined} text={watchers_count} key="watchers" />,
      ]}
      extra={<img width={272} alt="user avatar" src={owner.avatar_url} />}
    >
      <List.Item.Meta title={<TitleLink to={html_url} label={name} />} description={description}></List.Item.Meta>
      {description}
    </List.Item>
  )
}
