import { AlertCircle } from 'lucide-react'

export function ErrorMessage({ message = 'Something went wrong.' }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
      <AlertCircle className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}
