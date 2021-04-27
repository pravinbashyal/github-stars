import React from 'react'
import { Layout } from 'antd'

import { Header } from './Layout/Header'
import { Main } from './Layout/Main'
import { AlertGlobal } from './common-components/Alert/view/Alert'

export function AppLayout() {
  return (
    <Layout>
      <Header></Header>
      <Main></Main>
      <AlertGlobal></AlertGlobal>
    </Layout>
  )
}
