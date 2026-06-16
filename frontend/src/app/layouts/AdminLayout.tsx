import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/shared/Sidebar'
import { Navbar } from '../../components/shared/Navbar'

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-6 lg:grid-cols-[260px_1fr] lg:px-6">
        <Sidebar />
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
