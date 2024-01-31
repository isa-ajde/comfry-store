import { CartItemsList, CartTotals, SectionTitle } from '../components/index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Cart() {
  const user = useSelector((state) => state.userState.user)
  const { numItemsInCart } = useSelector((state) => state.cartState)
  if (numItemsInCart === 0) {
    return <SectionTitle text="your cart is empty" />
  }

  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12  ">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:ml-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn  btn-primary uppercase btn-block mt-8 tracking-widest  hover:scale-95 transition duration-300  hover:shadow-lg  hover:text-white"
            >
              Proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn  bg-slate-800 btn-block mt-8 tracking-widest text-gray-400  hover:scale-95 transition duration-300  hover:shadow-lg  hover:text-white hover:bg-slate-950 "
            >
              PLEASE LOGIN
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
