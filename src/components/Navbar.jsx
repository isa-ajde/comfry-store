import NavLinks from './NavLinks'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../features/user/userSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const handleChange = () => {
    dispatch(toggleTheme())
  }

  const { numItemsInCart } = useSelector((store) => store.cartState)

  return (
    <nav className="shadow-lg bg-slate-950 ">
      <div className="navbar align-elements ">
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-info rounded-2xl text-3xl items-center "
          >
            A
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-950 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME ICONS */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleChange} />
            {/* SUN icon */}
            <BsSunFill
              className="swap-on h-5 w-5  "
              style={{
                color: 'yellow',
                filter: 'drop-shadow(0 0 8px )',
              }}
            />
            {/* MOON icon */}
            <BsMoonFill
              className="swap-off h-5 w-5"
              style={{ color: 'white', filter: 'drop-shadow(0 0 8px )' }}
            />
          </label>
          {/* CART LINK*/}
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span
                style={{ boxShadow: '0 0 10px aqua', color: 'black' }}
                className="badge badge-sm badge-info font-bold indicator-item"
              >
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
