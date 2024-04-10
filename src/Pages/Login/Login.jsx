import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation,  useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const {googleSignin, githubSignin} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword]= useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const {signIn} = useAuth()
      const onSubmit = (data) => {
        const {email, password} = data;
        signIn(email, password)
        .then(()=>{
            toast.success("You have logged in successfully")
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
           toast.error(error.message.split(":")[1])
        })
      }

      const googleLogin=()=>{
        googleSignin()
        .then(()=>{
            toast.success("You have logged in successfully")
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
           toast.error(error.message.split(":")[1])
        })
      }
      const githubLogin=()=>{
        githubSignin()
        .then(()=>{
            toast.success("You have logged in successfully")
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
           toast.error(error.message.split(":")[1])
        })
      }

      

    
    return (
        <div className="card shrink-0 w-3/4 md:w-1/2 mx-auto shadow-2xl bg-base-100 mt-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <div className="relative">
          <input
            type={showPassword? "text":"password"}
            name="password"
            placeholder="password"
            className="input input-bordered w-full"
            {...register("password", { required: true })}
          />
          <span className="absolute top-1/3 right-3 text-xl" onClick={()=>setShowPassword(!showPassword)}>{showPassword? <FaEye />:<FaEyeSlash/>}</span>
          </div>
          {errors.password && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control mt-6">
            <button className="btn text-white text-lg font-semibold bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80">Login</button>
        </div>
      </form>
      <div className="flex justify-around my-2">
        {/* google  */}
      <button onClick={googleLogin} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
            </svg>
        Sign in with Google
        </button>
        {/* github  */}
        <button onClick={githubLogin} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
            </svg>
        Sign in with Github
        </button>
      </div>

      <p className="py-3 px-6">Do not have any account? Please <Link className="text-red-600 font-medium underline" to="/register">Register</Link></p>
      <ToastContainer />
    </div>
    );
};

export default Login;