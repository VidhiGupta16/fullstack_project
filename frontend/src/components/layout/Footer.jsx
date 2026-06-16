export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Vidhi Gupta. All rights reserved.</p>
        <p>Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  )
}
