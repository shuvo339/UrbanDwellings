import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'
import useAuth from "../../../Hooks/useAuth";
import userPic from '../../../assets/user.jpg'

const Navbar = () => {
  const {user, logOut} = useAuth();
  console.log(user)
    const navLinks = <>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg bg-sandstone-beige border-2 border-warm-taupe font-semibold':'border px-3 py-2 rounded-xl'} to="/">Home</NavLink></li>
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg bg-sandstone-beige border-2 border-warm-taupe font-semibold':'border px-3 py-2 rounded-xl'} to="/update">Update Profile</NavLink></li>
    {
      user? <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg bg-sandstone-beige border-2 border-warm-taupe font-semibold':'border px-3 py-2 rounded-xl'} to="/user">User Profile</NavLink></li>: ''
    }
    <li><NavLink className={({isActive})=>isActive? 'px-3 py-2 rounded-lg bg-sandstone-beige border-2 border-warm-taupe font-semibold':'border px-3 py-2 rounded-xl'} to="/contact">Contact Us</NavLink></li>
    </>


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
        user? <div className="flex gap-3"> 
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL || userPic} />
            </div>
      </div>
            <button onClick={handleSignout} className="btn bg-[#7E5E60] text-white">Logout</button>
        </div>:<Link to='/login'><button className="btn bg-[#7E5E60] text-white"> Login</button></Link>
      }
    
      </div>
    </div>
  );
};

export default Navbar;