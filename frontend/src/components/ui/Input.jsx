export function Input({ error, label, id, className = '', ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`min-h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}
