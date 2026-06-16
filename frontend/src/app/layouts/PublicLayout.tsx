import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/shared/Navbar'
import { Footer } from '../../components/shared/Footer'

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
