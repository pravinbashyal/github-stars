import React from 'react'
import { List } from 'antd'
import { RepositoryListItem } from './RepositoryListItem'
import { Repository } from '../common-domain/Github/Repository'
import { Styles } from '../common-domain/Style'
import { useFavoritesApi } from '../pages/Favorites/infra/useFavoritesApi'

export const styles: Styles = {
  repoList: {
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export const RepositoryList = ({
  repositories,
  isFetching = false,
}: {
  repositories: Repository[]
  isFetching?: boolean
}) => {
  const { toggleFavorites, isFavorite } = useFavoritesApi()
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={repositories}
      renderItem={(repository) => (
        <RepositoryListItem
          repository={repository}
          key={repository.id}
          isFavorite={isFavorite(repository.id)}
          toggleFavorites={toggleFavorites}
        ></RepositoryListItem>
      )}
      loading={isFetching}
      bordered
      style={styles.repoList}
    ></List>
  )
}
