import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { Switch, Route } from 'react-router-dom'
import { PopularRepo } from '../pages/Popular'
import { Favorites } from '../pages/Favorites'

export const Main = () => (
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
      </Switch>
    </Content>
  </Layout>
)
