import React from 'react'
import 'antd/dist/antd.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppLayout } from './AppLayout'

function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout></AppLayout>
      </Router>
    </div>
  )
}

export default App
