/* eslint-disable react-refresh/only-export-components */
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
import { loginUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
import { FaArrowLeft } from 'react-icons/fa'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
      const response = await customFetch.post('/auth/local', data)
      store.dispatch(loginUser(response.data))
      toast.success('logged in successfully')
      return redirect('/')
    } catch (error) {
      console.log(error)
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials'
      toast.error(errorMessage)
      return null
    }
  }

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      })
      dispatch(loginUser(response.data))
      toast.success('welcome guest user')

      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('guest user login error. please try again')
      return null
    }
  }

  return (
    <section className="h-screen grid place-items-center ">
      <Form
        method="post"
        className="card relative w-80 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4 sm:w-96"
      >
        <button
          className="btn w-14 sm:w-20 bg-base-300 text-white  absolute top-0 left-0  mx-auto "
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-3xl text-center font-bold  ">( Login )</h1>

        <FormInput name="identifier" label="email" type="email" />
        <FormInput name="password" label="password" type="password" />
        <div className="mt-4  ">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary  btn-block btn-outline capitalize font-bold tracking-wide "
          onClick={loginAsGuestUser}
        >
          quest user
        </button>
        <p className="text-center  ">
          Not a member yet?
          <Link to="/register" className="ml-2 link link-hover link-info ">
            Register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login
