import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { ROUTES } from '../../constants/routes'
import { useAuth } from '../../hooks/useAuth'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || ROUTES.DASHBOARD
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string }>()

  const onSubmit = async (values: { email: string; password: string }) => {
    setError('')
    login({ token: 'demo-token', user: { name: 'AMMS User', email: values.email, role: 'member' } })
    toast.success('Logged in successfully')
    navigate(from, { replace: true })
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
      <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
      <p className="mt-2 text-sm text-slate-400">Sign in to continue to your dashboard.</p>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <Input label="Email" type="email" placeholder="you@company.com" error={errors.email?.message} {...register('email', { required: 'Email is required' })} />
        <Input label="Password" type="password" placeholder="••••••••" error={errors.password?.message} {...register('password', { required: 'Password is required' })} />
        <Button type="submit">Login</Button>
      </form>
      <p className="mt-6 text-sm text-slate-400">
        New here? <Link className="text-indigo-300" to={ROUTES.REGISTER}>Create account</Link>
      </p>
    </div>
  )
}
