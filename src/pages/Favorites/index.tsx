import { Typography } from 'antd'
import React from 'react'
import { RepositoryList } from '../../common-components/RepositoryList'
import { Styles } from '../../common-domain/Style'
import { useFavoritesApi } from './infra/useFavoritesApi'

const { Title } = Typography

const sectionId = 'favorites-repositories-header'

const styles: Styles = {}

export const Favorites = () => {
  const { favorites } = useFavoritesApi()
  return (
    <section aria-labelledby={sectionId}>
      <Title level={2} id={sectionId}>
        Favorites
      </Title>
      <RepositoryList repositories={favorites}></RepositoryList>
    </section>
  )
}
