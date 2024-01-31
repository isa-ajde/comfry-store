/* eslint-disable react-refresh/only-export-components */
import { Form, redirect } from 'react-router-dom'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { customFetch, formatPrice } from '../utils'
import { toast } from 'react-toastify'
import { clearCart } from '../features/cart/cartSlice'

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData()
    const { name, address } = Object.fromEntries(formData)
    const user = store.getState().userState.user
    const { numItemsInCart, cartItems, orderTotal } = store.getState().cartState

    const info = {
      name,
      address,
      cartItems,
      chargeTotal: orderTotal,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      queryClient.removeQueries(['orders'])
      store.dispatch(clearCart())
      toast.success('order placed successfully')
      return redirect('/orders')
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order'
      toast.error(errorMessage)
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return redirect('/login')
      }
      return null
    }
  }

function CheckoutForm() {
  return (
    <Form method="POST" className="flex py-2 px-1 flex-col gap-y-4">
      <h4 className="font-medium text-xl text-center text-gray-400 ">
        Shipping Information
      </h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  )
}

export default CheckoutForm
