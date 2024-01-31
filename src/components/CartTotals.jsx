import { useSelector } from 'react-redux'
import { formatPrice } from '../utils/index'

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (store) => store.cartState
  )
  return (
    <div className=" card bg-slate-950">
      <div className="card-body  ">
        {/* Cart Total */}
        <p className="flex justify-between text-xs border-b border-base-300 text-white pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* Shipping*/}
        <p className="flex justify-between text-xs border-b border-base-300 text-white pb-2">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* Tax */}
        <p className="flex justify-between text-xs border-b border-base-300 text-white pb-2">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* Order Total */}
        <p className="flex justify-between text-sm text-white mt-4 ">
          <span>Order Total</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals
