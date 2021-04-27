import React from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppLayout } from './Layout/AppLayout'
import { AlertProvider } from './common-components/Alert/state/useAlert'
import { FavoritesDbProvider } from './common-infra/useFavoritesDb'

function App() {
  return (
    <div className="App">
      <Router>
        <AlertProvider>
          <FavoritesDbProvider>
            <AppLayout></AppLayout>
          </FavoritesDbProvider>
        </AlertProvider>
      </Router>
    </div>
  )
}

export default App
