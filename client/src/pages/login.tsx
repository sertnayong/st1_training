import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useAppContext } from "@/context";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const { name, setName } = useAppContext();

  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {

    const { email, password } = data;
    try {
      //   const result:any = await signIn('credentials', {
      //     redirect: false,
      //     email,
      //     password,
      //   })

      // if (result.error) {
      //   console.error(result.error)
      // } else {
      //   router.push('/users')
      // }
    } catch (error) {
      console.log('error', error)
    }
  };


  return (
    <div
      className="w-full h-screen flex items-center justify-center tracking-wider bg-gradient-to-t from-sky-700 to-gray  -300"
    >
      <div className="glass shadow-2xl sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-black font-medium">Login</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
          <div className="flex border-b-black border-b-2 mx-5  py-1">
            <input
              type="text"
              {...register("email")}
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter Your Name"
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaUser />
            </div>
          </div>
          {errors.email && (
            <p className="text-white mx-5">{errors.email.message}</p>
          )}

          <div className="flex border-b-black border-b-2 mx-5 mt-5 py-1">
            <input
              type="password"
              {...register("password")}
              className="w-11/12 bg-transparent outline-none placeholder-black"
              placeholder="Enter Your Password"
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaLock />
            </div>
          </div>
          {errors.password && (
            <p className="text-white mx-5">{errors.password.message}</p>
          )}

          <div className="mx-5 flex items-center justify-end cursor-pointer tracking-wider text-xs">
            <p>forgot password</p>
          </div>
          <div className="flex justify-center p-5">
            <button
              type="submit"
              className="btn btn-wide"
            >
              Login
            </button>
            {/* {statusLogin === "failed" && (
              <p className="flex items-center justify-center rounded-md bg-red-700  font-medium text-white p-2 mt-2">
                something went wrong
              </p>
            )}
            {statusLogin === "loading" && (
              <p className="flex items-center justify-center rounded-md bg-sky-700  font-medium text-white p-2 mt-2">
                loading...
              </p>
            )} */}
          </div>
          <div
            onClick={() => router.push("/register")}
            className="flex items-center justify-center cursor-pointer"
          >
            <p className="text-sm">Don't have an account? / Register</p>
          </div>
        </form>
      </div>
    </div>
  );
}