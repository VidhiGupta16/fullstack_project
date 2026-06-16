import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ROUTES } from '../../constants/routes'

type RoleRouteProps = {
  allowedRoles: string[]
}

export function RoleRoute({ allowedRoles }: RoleRouteProps) {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return <Navigate replace to={ROUTES.LOGIN} />
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role ?? 'member')) {
    return <Navigate replace to={ROUTES.DASHBOARD} />
  }

  return <Outlet />
}
