import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../ui/Button'

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 lg:px-6">
        <Link className="text-lg font-semibold text-white" to={ROUTES.HOME}>
          AMMS
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <Link to={ROUTES.FEATURES}>Features</Link>
          <Link to={ROUTES.ABOUT}>About</Link>
          <Link to={ROUTES.CONTACT}>Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="hidden text-sm text-slate-300 sm:inline">
                {user?.name || 'Member'}
              </span>
              <Button variant="secondary" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to={ROUTES.LOGIN}>
                <Button variant="secondary">Sign in</Button>
              </Link>
              <Link to={ROUTES.REGISTER}>
                <Button>Get started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
