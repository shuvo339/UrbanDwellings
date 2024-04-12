import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const UpdateProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const {name, photo} = data;
      }
    return (
        <div className="w-3/4 md:w-1/2 mx-auto mt-8">
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
        </div>
    );
};

export default UpdateProfile;