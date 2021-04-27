import { BrowserRouter as Router } from 'react-router-dom'
import React, { FC } from 'react'
import { FavoritesDbProvider } from '../common-infra/useFavoritesDb'
import { AlertProvider } from '../common-components/Alert/state/useAlert'

export const Wrapper: FC<{}> = ({ children }) => (
  <AlertProvider>
    <FavoritesDbProvider>
      <Router>{children}</Router>
    </FavoritesDbProvider>
  </AlertProvider>
)
