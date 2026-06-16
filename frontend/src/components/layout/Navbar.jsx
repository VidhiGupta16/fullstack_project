import { Link, NavLink } from 'react-router-dom'
import { LayoutDashboard, LogOut } from 'lucide-react'
import { ROUTES } from '../../constants/routes'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../ui/Button'

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-950'
  }`

export function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-bold text-gray-950" to={ROUTES.HOME}>
          Vidhi Gupta
        </Link>

        <div className="flex items-center gap-2">
          <NavLink className={navLinkClass} to={ROUTES.HOME}>
            Home
          </NavLink>
          {isAuthenticated && (
            <NavLink className={navLinkClass} to={ROUTES.DASHBOARD}>
              Dashboard
            </NavLink>
          )}
          {isAuthenticated ? (
            <Button onClick={logout} variant="ghost">
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Logout
            </Button>
          ) : (
            <Link className="hidden sm:inline-flex" to={ROUTES.LOGIN}>
              <Button variant="secondary">
                <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
                Login
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
