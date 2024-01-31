import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar, Loading } from '../components/index'

function HomeLayout() {
  const navigation = useNavigation()
  const loding = navigation.state === 'loading'
  return (
    <>
      <Header />
      <Navbar />

      <section className="align-elements py-20 ">
        {loding ? <Loading /> : <Outlet />}
      </section>
    </>
  )
}

export default HomeLayout
