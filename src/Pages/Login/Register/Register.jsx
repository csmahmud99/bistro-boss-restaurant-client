import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(userCredential =>{
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        });
        reset();
    };

    

    return (
        <>
            <Helmet>
                <title>Register | Bistro Boss Restaurant</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your Name" {...register("name", { required: true })} className="input input-bordered" />
                                {/* errors will return when field validation fails  */}
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter Email" {...register("email", { required: true })} className="input input-bordered" />
                                {/* errors will return when field validation fails  */}
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter Password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} className="input input-bordered" />
                                {/* errors will return when field validation fails  */}
                                {errors.password?.type === "required" && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600">Password must be at least 6 characters</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600">Password must be at most 20 characters</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">Password must have at least one upper case, one lower case, one digit & one special character</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;