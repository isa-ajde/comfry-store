import { useLoaderData, Link } from 'react-router-dom'
import { formatPrice } from '../utils'

function ProductsGrid() {
  const { products } = useLoaderData()
  return (
    <div className="grid gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes
        const dollarsAmount = formatPrice(price)
        return (
          <Link
            to={`/products/:${product.id}`}
            key={product.id}
            className="w-full shadow-xl hover:shadow-2xl bg-slate-950 text-white card transition duration-300  "
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-box w-full h-64 md:h-48 object-cover border-2 border-white "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-info">{dollarsAmount}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsGrid
