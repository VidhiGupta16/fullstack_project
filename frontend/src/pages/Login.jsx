import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ROUTES } from '../constants/routes'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { ErrorMessage } from '../components/common/ErrorMessage'
import { authService } from '../services/authService'

export function Login() {
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { login } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || ROUTES.DASHBOARD

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm()

  const onSubmit = async (values) => {
    setError('')
    setIsSubmitting(true)

    try {
      const response = await authService.login(values)
      login(response)
      toast.success('Logged in successfully')
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to login. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mx-auto flex max-w-md flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-soft">
        <h1 className="text-2xl font-bold text-gray-950">Welcome back</h1>
        <p className="mt-2 text-sm text-gray-600">Sign in to continue to your dashboard.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {error && <ErrorMessage message={error} />}
          <Input
            error={errors.email?.message}
            id="email"
            label="Email"
            placeholder="vidhi@example.com"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email address',
              },
            })}
          />
          <Input
            error={errors.password?.message}
            id="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          <Button className="w-full" isLoading={isSubmitting} type="submit">
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          New here?{' '}
          <Link className="font-semibold text-brand-700 hover:text-brand-600" to={ROUTES.REGISTER}>
            Create an account
          </Link>
        </p>
      </div>
    </section>
  )
}
