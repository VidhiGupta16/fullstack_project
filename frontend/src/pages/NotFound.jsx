import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { Button } from '../components/ui/Button'

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">404</p>
      <h1 className="mt-3 text-4xl font-bold text-gray-950">Page not found</h1>
      <p className="mt-4 text-gray-600">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link className="mt-8" to={ROUTES.HOME}>
        <Button>Back to home</Button>
      </Link>
    </section>
  )
}
