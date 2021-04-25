import React from 'react'
import { Header as AntdHeader } from 'antd/lib/layout/layout'
import { NavBar } from './NavBar'
import { Typography } from 'antd'

const { Title } = Typography

export const Header = () => (
  <AntdHeader
    style={{
      display: 'flex',
    }}
  >
    <Title
      style={{
        color: 'white',
        paddingRight: '32px',
      }}
    >
      Popular Github Repo
    </Title>
    <NavBar></NavBar>
  </AntdHeader>
)
