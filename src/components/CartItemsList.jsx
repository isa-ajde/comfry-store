import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

function CartItemsList() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cartState)
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartlist={item} />
      })}
      <button
        onClick={() => dispatch(clearCart())}
        className="block w-full btn tracking-widest font-medium hover:scale-95 "
      >
        Clear Cart
      </button>
    </>
  )
}

export default CartItemsList
