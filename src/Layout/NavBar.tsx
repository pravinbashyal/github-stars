import React, { useEffect } from 'react'
import { Menu } from 'antd'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { findKey } from 'lodash-es'

enum NavMenu {
  Popular = 'popular',
  Favorites = 'favorites',
}

const navMenuUrl: Record<NavMenu, string> = {
  [NavMenu.Popular]: '/popular',
  [NavMenu.Favorites]: '/favorites',
}

export const NavBar = () => {
  const [selectedTab, setSelectedTab] = React.useState(NavMenu.Popular)
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    const navMenu = findKey(navMenuUrl, (value) => value === location.pathname)
    if (!navMenu) {
      return
    }
    setSelectedTab(navMenu as NavMenu)
  }, [selectedTab, location])

  const navigateTab = (navMenu: NavMenu) => {
    history.push(navMenuUrl[navMenu])
  }
  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[selectedTab]}>
      <Menu.Item key={NavMenu.Popular} onClick={() => navigateTab(NavMenu.Popular)}>
        Popular
      </Menu.Item>
      <Menu.Item key={NavMenu.Favorites}>
        <Link to={`/${NavMenu.Favorites}`}>Favorites</Link>
      </Menu.Item>
    </Menu>
  )
}
