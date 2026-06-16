import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { Dashboard } from '../pages/Dashboard'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { Register } from '../pages/Register'
import { ROUTES } from '../constants/routes'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.DASHBOARD,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
