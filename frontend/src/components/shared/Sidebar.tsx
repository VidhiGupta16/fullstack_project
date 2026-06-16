import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const links = [
  ['Dashboard', ROUTES.DASHBOARD],
  ['Workspaces', ROUTES.WORKSPACES],
  ['Meetings', ROUTES.MEETINGS],
  ['Recordings', ROUTES.RECORDINGS],
  ['Transcripts', ROUTES.TRANSCRIPTS],
  ['Summaries', ROUTES.SUMMARIES],
  ['Action Items', ROUTES.ACTION_ITEMS],
  ['Search', ROUTES.SEARCH],
  ['Notifications', ROUTES.NOTIFICATIONS],
  ['Analytics', ROUTES.ANALYTICS],
  ['Audit Logs', ROUTES.AUDIT_LOGS],
  ['Admin', ROUTES.ADMIN],
] as const

export function Sidebar() {
  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">Navigation</p>
      <div className="grid gap-2">
        {links.map(([label, to]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                'rounded-xl px-3 py-2 text-sm transition',
                isActive ? 'bg-indigo-500 text-white' : 'text-slate-300 hover:bg-slate-800',
              ].join(' ')
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </aside>
  )
}
