import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Login from "./Login";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [message, setMessage] = useState(""); // ✅ Fix: Add message state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully! 🎉"); // ✅ Toast should be inside a function
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          const errorMsg = err.response.data.message || "Signup failed";
          setMessage(errorMsg); // ✅ Set error message
          toast.error("Error: " + errorMsg);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close Button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name Input */}
              <div className="mt-4 space-y-2">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: "Name is required" })}
                />
                {errors.fullname && <span className="text-red-500">{errors.fullname.message}</span>}
              </div>

              {/* Email Input */}
              <div className="mt-4 space-y-2">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>

              {/* Password Input */}
              <div className="mt-4 space-y-2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>

              {/* Button */}
              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have an account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>

              {/* ✅ Message Display (Error or Success) */}
              {message && <p className="mt-4 text-center text-green-500">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
