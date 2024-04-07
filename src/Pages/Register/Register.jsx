import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hooks/useAuth";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const {createUser} = useAuth();

      const onSubmit = (data) => {
        const {email, password} = data;
        if(password.length<6){
            toast.error("Password should be at least 6 characters");
            return;
        }
        if(!/(?=.*[A-Z])/.test(password)){
            toast.error("Password must have an uppercase letter");
            return;
        }
        if(!/(?=.*[a-z])/.test(password)){
            toast.error("Password must have an lowercase letter");
            return;
        }
        createUser(email, password)
        .then(()=>{
            toast.success("User created successfully")
        })
        .catch(error=>{
           toast.error(error.message.split(":")[1])
        })
        
      }

    
    return (
        <div className="card shrink-0 w-3/4 md:w-1/2 mx-auto shadow-2xl bg-base-100 mb-4 mt-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-center">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Please provide your name"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Please provide your email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Please provide your photo url"
            className="input input-bordered"
            {...register("photo", { required: true })}
          />
          {errors.photo && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Please create password"
            className="input input-bordered"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control mt-6">
            <button className="btn text-white text-lg font-semibold bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80">Register</button>
        </div>
      </form>
      <p className="pb-3 px-6">Already have an acoount? Please <Link className="text-green-700 font-medium underline" to="/login">Login</Link></p>
    
      <ToastContainer />
      </div>
    );
};


export default Register;
