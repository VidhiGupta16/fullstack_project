import type { ReactNode } from 'react'

export function PageFrame({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-black/20">
      {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">{eyebrow}</p>}
      <h1 className="mt-3 text-3xl font-semibold text-white">{title}</h1>
      {description && <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{description}</p>}
      {children && <div className="mt-6">{children}</div>}
    </section>
  )
}
