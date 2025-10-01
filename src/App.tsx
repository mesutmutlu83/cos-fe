import { Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import React from 'react'

const App: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
