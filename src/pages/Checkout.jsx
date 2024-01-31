/* eslint-disable react-refresh/only-export-components */
import { useSelector } from 'react-redux'
import { SectionTitle, CartTotals, CheckoutForm } from '../components/index'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

export const loader = (store) => () => {
  const user = store.getState().userState.user
  if (!user) {
    toast.warn('You must be logged in to checkout ')
    return redirect('/login')
  }
  return null
}

function Checkout() {
  const cartTotal = useSelector((state) => state.cartState.cartTotal)
  if (cartTotal === 0) {
    return <SectionTitle text="Your Cart Is Empty" />
  }
  return (
    <>
      <SectionTitle text="Place Your Order" />
      <div className=" bg-gray-800   px-10 rounded-xl py-5 mt-8 grid gap-10 lg:grid-cols-2 items-center  ">
        <CheckoutForm />
        <div>
          <h1 className="text-2xl text-center tracking-widest mb-5 font-bold text-gray-400  ">
            Receipt
          </h1>
          <CartTotals />
        </div>
      </div>
    </>
  )
}

export default Checkout
