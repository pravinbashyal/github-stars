import React from 'react'
import { Layout } from 'antd'

import { Header } from './Layout/Header'
import { Main } from './Layout/Main'

export function AppLayout() {
  return (
    <Layout>
      <Header></Header>
      <Main></Main>
    </Layout>
  )
}
