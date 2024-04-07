import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
    const navLinks = <>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg bg-sandstone-beige border-2 border-warm-taupe font-semibold':'border px-3 py-2 rounded-xl'} to="/">Home</NavLink></li>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg bg-sandstone-beige border-2 border-warm-taupe font-semibold':'border px-3 py-2 rounded-xl'} to="/update">Update Profile</NavLink></li>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg bg-sandstone-beige border-2 border-warm-taupe font-semibold':'border px-3 py-2 rounded-xl'} to="/about">About</NavLink></li>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg bg-sandstone-beige border-2 border-warm-taupe font-semibold':'border px-3 py-2 rounded-xl'} to="/register">Register</NavLink></li>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg bg-sandstone-beige border-2 border-warm-taupe font-semibold':'border px-3 py-2 rounded-xl'} to="/contact">Contact Us</NavLink></li>
    </>

  const {user, logOut} = useAuth();
  const handleSignout=()=>{
    logOut()
    .then()
    .catch()
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
             {navLinks}
          </ul>
        </div>
        <Link><img  src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
        {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <><span>{user.email}</span><button onClick={handleSignout} className="btn">Logout</button></>:<Link to="/login" className="btn">Login</Link>
        }
          
      </div>
    </div>
  );
};

export default Navbar;