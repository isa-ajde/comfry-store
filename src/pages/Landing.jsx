import { Hero, FeaturedProducts } from '../components'
import { customFetch } from '../utils'

const url = '/products?featured=true'

const featuredProductsQueery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQueery)
  const products = response.data.data
  return { products }
}

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing
