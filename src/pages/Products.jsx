/* eslint-disable react-refresh/only-export-components */
import { Filters, ProductsContainer, Pagination } from '../components'
import { customFetch } from '../utils'

const productsQuery = (params) => {
  const { search, category, company, sort, price, shipping, page } = params
  // ??  operatörün sol tarafındaki değişken boş veya null ise varsayılan bir değer sağlamak için kullanılır.

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params,
      }),
  }
}

const url = '/products'
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    const response = await queryClient.ensureQueryData(productsQuery(params))
    const products = response.data.data
    const meta = response.data.meta

    return { products, meta, params }
  }

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <Pagination />
    </>
  )
}

export default Products
