import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import { ROUTES } from '../constants/routes'
import { Button } from '../components/ui/Button'

export function Home() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.45 }}
        className="flex flex-col justify-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-600">
          Production React Frontend
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-gray-950 sm:text-5xl">
          Build reliable user experiences with a clean React foundation.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
          A modular frontend starter with routing, authentication structure, API services,
          reusable UI, and responsive Tailwind styling.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={ROUTES.REGISTER}>
            <Button>
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <Button variant="secondary">Sign in</Button>
          </Link>
        </div>
      </motion.div>

      <div className="grid content-center gap-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-soft">
          <Zap className="h-8 w-8 text-brand-600" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-gray-950">Fast by default</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Vite, React 19, and focused code organization keep development quick and predictable.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-soft">
          <ShieldCheck className="h-8 w-8 text-emerald-600" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-gray-950">Auth-ready structure</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Protected routes, token storage, and Axios interceptors are already in place.
          </p>
        </div>
      </div>
    </section>
  )
}
