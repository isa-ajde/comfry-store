/* eslint-disable react-refresh/only-export-components */
import { SubmitBtn, FormInput } from '../components/index'
import { Link, Form, useNavigate, redirect } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await customFetch.post(`/auth/local/register`, data)
    console.log(response)
    toast.success('account created successfully')
    return redirect('/login')
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials'
    toast.error(errorMessage)
    return null
  }
}

function Register() {
  const navigate = useNavigate()

  return (
    <section className="h-screen grid place-items-center ">
      <Form
        method="post"
        className="w-80 sm:w-96 p-8 bg-base-300 shadow-lg relative card flex flex-col gap-y-4 "
      >
        <button
          className="btn w-14 sm:w-20 bg-base-300 text-white  absolute top-0 left-0  mx-auto "
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-3xl text-center font-bold  ">( Register )</h1>
        <FormInput type="text" name="username" label="User Name" />
        <FormInput type="email" name="email" label="Email" />
        <FormInput type="password" name="password" label="Password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center  ">
          Already a member?
          <Link to="/login" className="ml-2 link link-hover link-info ">
            Login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register
