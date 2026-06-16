import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import { Button } from '../ui/Button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 text-slate-400">The page you’re looking for doesn’t exist yet.</p>
        <Link className="mt-6 inline-block" to={ROUTES.HOME}>
          <Button>Go home</Button>
        </Link>
      </div>
    </div>
  )
}
