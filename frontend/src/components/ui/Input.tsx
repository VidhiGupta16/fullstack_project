import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <label className="grid gap-2 text-sm text-slate-200">
      {label && <span>{label}</span>}
      <input
        className={[
          'w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 outline-none',
          'placeholder:text-slate-500 focus:border-indigo-500',
          className,
        ].join(' ')}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  )
}
