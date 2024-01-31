/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Link } from 'react-router-dom'
import { formatPrice, customFetch, generateAmountOptions } from '../utils'
import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { LuBaggageClaim } from 'react-icons/lu'
import { addItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const singleProductsQuery = (id) => {
  return {
    queryKey: ['singleProducts', id],
    queryFn: async () => {
      const response = await customFetch(`/products/${id}`)
      return response
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    // replace fonksiyonu değiştirmek için kullanılır burda params.id == :19 bizlerde bunu replace kullanrak 19 sayısının önündeki ":" yı "" kaldırıp boş bir değer atadık "".
    const id = params.id.replace(':', '')
    const response = await queryClient.ensureQueryData(singleProductsQuery(id))
    return { product: response.data.data }
  }

function SingleProducts() {
  const { product } = useLoaderData()
  const { image, title, price, description, colors, company } =
    product.attributes
  const dollarsAmount = formatPrice(price)
  const [productsColors, setProductsColors] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }

  const cartProducts = {
    cartID: product.id + productsColors,
    productID: product.id,
    image,
    title,
    company,
    price,
    productsColors,
    amount,
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addItem({ products: cartProducts }))
  }

  return (
    <section>
      <div className="text-sm breadcrumbs ">
        {/* BREADCRUMBS */}
        <ul>
          <li>
            <Link to="/" className="link link-hover font-bold    ">
              <FaHome className="mr-1  " />
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="link link-hover font-bold    ">
              <LuBaggageClaim className="mr-1  " />
              Products
            </Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-x-16 mt-6  ">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover rounded-lg  "
        />
        {/* PRODUCTS */}
        <div className="p-2  lg:p-0">
          <h1 className="capitalize font-bold tracking-wide text-3xl ">
            {title}
          </h1>
          <h4 className="mt-2 font-bold  text-xl ">{company}</h4>
          <p className="mt-3 font-bold tracking-wide text-cyan-600 ">
            ={dollarsAmount}
          </p>
          <p className="mt-6 font-medium border-b-2  border-info  leading-7  pb-4 ">
            {description}.
          </p>
          {/* COLORS */}
          <div className="mt-3">
            <p className="font-bold text-lg  tracking-wide capitalize ">
              colors
            </p>
            {colors.map((color) => {
              return (
                <button
                  type="button"
                  key={color}
                  className={`mr-2 badge btn-sm mt-2 btn  ${
                    color === productsColors && `border-4 border-violet-950 `
                  } `}
                  style={{ background: color }}
                  onClick={() => setProductsColors(color)}
                ></button>
              )
            })}
          </div>
          {/* AMOUNT  */}
          <div className="mt-3 form-control w-full max-w-xs ">
            <label className="label" htmlFor="amount">
              <h4 className="font-bold text-md  tracking-wider capitalize ">
                amount
              </h4>
            </label>

            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          {/* CART */}
          <div className="mt-8">
            <button className="btn btn-secondary btn-md   " onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProducts
