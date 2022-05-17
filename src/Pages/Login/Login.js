import React from "react";
import auth from "../../Firebase.Init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    if (user) {
        console.log(user);
    }
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title justify-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    pattern: /[A-Za-z]{3}/,
                                    massage: "error massage",
                                })}
                            />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label>
                        </div>
                        <input />
                        {errors.firstName?.type === "required" &&
                            "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline hover:btn hover:btn-primary hover:uppercase hover:text-white hover:font-bold hover:bg-gradient-to-r hover:from-secondary hover:to-primary"
                    >
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
