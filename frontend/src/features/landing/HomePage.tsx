import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import { ROUTES } from '../../constants/routes'
import { Button } from '../../components/ui/Button'

const featureCards = [
  {
    title: 'AI Summaries',
    description: 'Executive summary, decisions, next steps, and risks.',
    Icon: Sparkles,
  },
  {
    title: 'Secure Access',
    description: 'JWT login, protected routes, and role based UI.',
    Icon: ShieldCheck,
  },
] as const

export function HomePage() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16 lg:px-6">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">AI Meeting Memory System</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-white">
            A polished SaaS dashboard for meeting intelligence.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Built for workspaces, meetings, transcripts, summaries, action items, analytics, and admin control.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={ROUTES.REGISTER}>
              <Button>
                Get started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to={ROUTES.FEATURES}>
              <Button variant="secondary">See features</Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          {featureCards.map(({ title, description, Icon }) => (
            <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <Icon className="h-8 w-8 text-indigo-300" />
              <h2 className="mt-4 text-xl font-medium text-white">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
