import { LoaderCircle } from 'lucide-react'

export function Loader({ label = 'Loading' }) {
  return (
    <div className="flex min-h-40 items-center justify-center gap-3 text-gray-600">
      <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
