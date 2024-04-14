import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const UpdateProfile = () => {
  const {profileUpdate, user} = useAuth();
    const {
        register,
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
        let {name, photo} = data;
        if(name === ''){
          name = `${user?.displayName}`
        }
        if(photo === ''){
          photo = `${user?.photoURL}`
        }
        console.log(user.displayName)
        profileUpdate(name,photo)
        .then(()=>{
          toast.success("Profile updated successfully")
        })

      }
    return (
        <div className="w-3/4 md:w-1/2 mx-auto mt-8">
            <Helmet>
                <title>UrbanDwellings | Update</title>
            </Helmet>
            <h2 className="text-3xl font-medium text-center">Update Profile</h2>
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
            {...register("name")}
          />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Please provide your email"
            className="input input-bordered"
            {...register("email")}
          />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Please provide your photo url"
            className="input input-bordered"
            {...register("photo")}
          />
        </div>
        <button className="btn bg-[#7E5E60] text-white">Save the Changes</button>
        </form>
        <ToastContainer />
        </div>
    );
};

export default UpdateProfile;