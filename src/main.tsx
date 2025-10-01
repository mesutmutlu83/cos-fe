import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import App from './App'
import LoginPage from './pages/LoginPage'
import TenantPage from './pages/Admin/TenantPage'
import UsersPage from './pages/Admin/UsersPage'
import SetupPage from './pages/Org/SetupPage'
import ProtectedRoute from './routes/ProtectedRoute'
import RoleRoute from './routes/RoleRoute'

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    path: '/',
    element: <ProtectedRoute><App /></ProtectedRoute>,
    children: [
      { path: '/admin/tenant', element: <RoleRoute roles={['ADMIN']}><TenantPage/></RoleRoute> },
      { path: '/admin/users', element: <RoleRoute roles={['ADMIN','CEO','STRATEGY_MANAGER']}><UsersPage/></RoleRoute> },
      { path: '/org/setup', element: <RoleRoute roles={['ADMIN']}><SetupPage/></RoleRoute> }
    ]
  }
])

const qc = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={qc}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
