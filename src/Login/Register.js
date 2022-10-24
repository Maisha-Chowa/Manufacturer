import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "../Shared/Loading";

const Register = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, uerror] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, verror] =
    useSendEmailVerification(auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user || guser);

  if (token) {
    console.log(user);
    navigate("/purchase");
  }
  let signInError;
  if (error || gerror || uerror || verror) {
    console.log(errors.message);
    signInError = (
      <p className="text-red-500">{error?.message || gerror?.message}</p>
    );
  }
  // true ||
  if (loading || gloading || updating || sending) {
    return <Loading></Loading>;
  }
  const onSubmit = async (data) => {
    console.log(data);

    await sendEmailVerification();
    alert("mail sent");
    await createUserWithEmailAndPassword(data.email, data.password);

    await updateProfile({ displayName: data.name });
    console.log("update profile");
    navigate("/home");
  };
  return (
    <div className="my-28 flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">SignUp</h2>
          {/* react hook form start here */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name:</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                class="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email:</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password:</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },

                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or  longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn w-full max-w-xs text-white mt-4"
              type="submit"
              value="SignUp"
            />
          </form>

          <p>
            <small>
              Already a Member...
              <Link to="/login" className="text-primary">
                Go to Login
              </Link>
            </small>
          </p>

          {/* react hook form ends here */}
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
