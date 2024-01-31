/* eslint-disable react/prop-types */
import { formatPrice, generateAmountOptions } from '../utils/index'
import { removeItem, editItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

function CartItem({ cartlist }) {
  const { cartID, image, title, company, price, productsColors, amount } =
    cartlist

  const dispatch = useDispatch()

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* COMPANY */}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        {/* COLOR */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productsColors }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text font-medium  ">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            value={amount}
            className="mt-2 select select-base select-bordered select-xs"
            onChange={(e) =>
              dispatch(editItem({ cartID, amount: parseInt(e.target.value) }))
            }
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className="mt-3 bg-red-700 px-2 py-1 rounded-md text-white hover:text-gray-200 hover:scale-105 transition duration-75  text-sm"
          onClick={() => dispatch(removeItem({ cartID }))}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  )
}

export default CartItem
