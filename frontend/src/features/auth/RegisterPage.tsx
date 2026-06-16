import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { ROUTES } from '../../constants/routes'
import { useAuth } from '../../hooks/useAuth'

export function RegisterPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<{ name: string; email: string; password: string }>()

  const onSubmit = async (values: { name: string; email: string; password: string }) => {
    login({ token: 'demo-token', user: { name: values.name, email: values.email, role: 'member' } })
    toast.success('Account created')
    navigate(ROUTES.DASHBOARD)
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
      <h1 className="text-3xl font-semibold text-white">Create account</h1>
      <p className="mt-2 text-sm text-slate-400">Start with a secure frontend foundation.</p>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Full name" placeholder="Vidhi Gupta" error={errors.name?.message} {...register('name', { required: 'Full name is required' })} />
        <Input label="Email" type="email" placeholder="you@company.com" error={errors.email?.message} {...register('email', { required: 'Email is required' })} />
        <Input label="Password" type="password" placeholder="Create a password" error={errors.password?.message} {...register('password', { required: 'Password is required' })} />
        <Button type="submit">Register</Button>
      </form>
      <p className="mt-6 text-sm text-slate-400">
        Already have an account? <Link className="text-indigo-300" to={ROUTES.LOGIN}>Login</Link>
      </p>
    </div>
  )
}
