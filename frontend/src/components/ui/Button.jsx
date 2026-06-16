import { LoaderCircle } from 'lucide-react'

const variants = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-200',
  secondary: 'bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50',
  ghost: 'text-gray-700 hover:bg-gray-100',
}

export function Button({
  children,
  className = '',
  disabled = false,
  isLoading = false,
  type = 'button',
  variant = 'primary',
  ...props
}) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading && <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  )
}
