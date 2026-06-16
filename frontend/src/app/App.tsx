import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AppProviders } from './providers/AppProviders'
import { router } from './router'

export function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </AppProviders>
  )
}
