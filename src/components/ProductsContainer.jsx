import { useLoaderData } from 'react-router-dom'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { useState } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'

function ProductsContainer() {
  const { meta } = useLoaderData()
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState('grid')

  const setActiveStyles = (pattern) => {
    return `btn btn-sm btn-circle text-xl ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content '
    } `
  }

  return (
    <>
      <div className="flex justify-between items-center border-b-4 border-info  p-2 mb-6 pb-5 mt-8 ">
        <h1 className="text-md font-medium ">
          {totalProducts} product{totalProducts > 1 && 's'}
        </h1>
        <div className="flex gap-x-2 me-2 ">
          <button
            type="button"
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>

      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  )
}

export default ProductsContainer
