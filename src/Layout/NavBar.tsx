import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

export const NavBar = () => (
  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
    <Menu.Item key="1">
      <Link to="/popular">Popular</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/favorites">Favorites</Link>
    </Menu.Item>
  </Menu>
)
