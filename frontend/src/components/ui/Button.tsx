import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
  children: ReactNode
}

export function Button({ variant = 'primary', isLoading, children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition'
  const styles =
    variant === 'primary'
      ? 'bg-indigo-500 text-white hover:bg-indigo-400'
      : 'bg-slate-800 text-slate-100 hover:bg-slate-700'

  return (
    <button className={[base, styles, className].join(' ')} {...props}>
      {isLoading ? 'Loading…' : children}
    </button>
  )
}
