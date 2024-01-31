import { Link, useNavigate } from 'react-router-dom'
import Deneme from './Deneme'
import { logoutUser } from '../features/user/userSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useQueryClient } from '@tanstack/react-query'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userState.user)
  const queryClient = useQueryClient()

  const handleLogout = () => {
    navigate('/')
    dispatch(clearCart())
    dispatch(logoutUser())
    queryClient.removeQueries()
  }

  return (
    <header className="bg-slate-950 border-b border-info py-2 text-neutral-content">
      <div className="align-elements  ">
        {/* USER */}

        {user ? (
          <div className="flex justify-between items-center gap-x-6 sm:gap-x-8 ">
            <div className="w-10 sm:w-0">
              <Deneme />
            </div>
            <div className="flex gap-x-4">
              <p className="text-xs sm:text-sm flex items-center ">
                Hello, {user.username}
              </p>
              <button
                className="btn btn-xs btn-outline btn-primary "
                onClick={handleLogout}
              >
                logout
              </button>
            </div>
          </div>
        ) : (
          <div className=" flex justify-between">
            <div>
              <Deneme />
            </div>
            <div className="flex gap-x-6 justify-center items-center ">
              <Link
                to="/login"
                className="link link-hover   hover:text-white duration-300  sm:font-bold text-xs sm:text-sm"
              >
                Sing in / Guest
              </Link>
              <Link
                to="/register"
                className="link sm:font-bold link-hover duration-300 hover:text-white text-xs sm:text-sm"
              >
                Create Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
