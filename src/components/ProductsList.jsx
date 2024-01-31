import { useLoaderData, Link } from 'react-router-dom'
import { formatPrice } from '../utils'

function ProductsList() {
  const { products } = useLoaderData()
  return (
    <div className="grid gap-y-4">
      {products.map((product) => {
        const { image, title, price, company } = product.attributes
        const dollarsAmount = formatPrice(price)
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="p-4 sm:p-8 rounded-lg grid grid-cols-2 gap-x-6 sm:gap-x-0 sm:grid-cols-none sm:flex  bg-slate-950 text-white shadow-xl hover:shadow-2xl duration-300 group "
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-40 rounded-lg   sm:h-32 sm:w-60 object-cover group-hover:scale-105 transition duration-300 "
            />
            <div className=" sm:ml-20 grid sm:grid-cols-2 w-full ">
              <div>
                <h3 className="capitalize font-medium text-lg">{title}</h3>
                <h3 className="capitalize text-neutral-content text-md">
                  {company}
                </h3>
              </div>
              <p className="font-medium text-lg sm:text-end ">
                {dollarsAmount}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsList
