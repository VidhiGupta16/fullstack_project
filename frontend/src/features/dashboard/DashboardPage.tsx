import { PageFrame } from '../../components/common/PageFrame'

const cards = [
  ['Total Meetings', '128'],
  ['Total Workspaces', '14'],
  ['Pending Action Items', '22'],
  ['Completed Action Items', '86'],
  ['AI Summaries Generated', '311'],
  ['Recent Notifications', '9'],
]

export function DashboardPage() {
  return (
    <div className="grid gap-6">
      <PageFrame
        eyebrow="Dashboard"
        title="Analytics overview"
        description="Widgets and charts for meetings, workspaces, actions, and AI usage are scaffolded here."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(([title, value]) => (
          <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm text-slate-400">{title}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
