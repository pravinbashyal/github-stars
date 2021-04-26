import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { Switch, Route } from 'react-router-dom'
import { PopularRepo } from '../pages/PopularRepo'
import { Favorites } from '../pages/Favorites'

export const Main = () => {
  return (
    <Layout
      style={{
        padding: '32px 64px 64px 64px',
      }}
    >
      <Content>
        <Switch>
          <Route path="/popular">
            <PopularRepo></PopularRepo>
          </Route>
          <Route path="/favorites">
            <Favorites></Favorites>
          </Route>
          <Route path="/">
            <PopularRepo></PopularRepo>
          </Route>
        </Switch>
      </Content>
    </Layout>
  )
}
