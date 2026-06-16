import { CalendarDays, UserRound } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { formatDisplayDate } from '../utils/formatDate'

export function Dashboard() {
  const { user } = useAuth()

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-950">
              Hello, {user?.name || 'User'}
            </h1>
            <p className="mt-2 text-gray-600">Your protected route is working successfully.</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {formatDisplayDate(new Date())}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <UserRound className="h-6 w-6 text-brand-600" aria-hidden="true" />
          <h2 className="mt-4 font-semibold text-gray-950">Profile</h2>
          <p className="mt-1 text-sm text-gray-600">{user?.email || 'No email available'}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-950">API layer</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Axios client and auth services are ready for backend integration.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-950">Reusable UI</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Button, input, loader, and error components are shared across pages.
          </p>
        </div>
      </div>
    </section>
  )
}
