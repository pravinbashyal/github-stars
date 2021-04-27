import React from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { AlertProvider } from './common-components/Alert/state/useAlert'

function App() {
  return (
    <div className="App">
      <Router>
        <AlertProvider>
          <AppLayout></AppLayout>
        </AlertProvider>
      </Router>
    </div>
  )
}

export default App
