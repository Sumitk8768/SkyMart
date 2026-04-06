import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
    let {setRegisterUsers, registerUsers} = useContext(Auth);
    let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();



  let handleFormSubmit = (data) => {
    // console.log(data)
    let newUser = [...registerUsers, data]
    console.log(newUser)
    setRegisterUsers(newUser)
    localStorage.setItem("reg users", JSON.stringify(newUser))
    toast.success("User registered successfully")
    reset()
  };

  return (
    <div className="bg-[#0D0D0D] w-full h-screen flex flex-col  items-center pt-25">
      <div className="flex items-center gap-2">
        <img
          className="w-8"
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/21/85/d1/2185d1ae-a5ad-5367-436c-10cba2a8913d/AppIcon-1x_U007epad-0-1-0-85-220-0.png/400x400ia-75.webp"
          alt=""
        />
        <h2 className="text-white text-2xl font-bold">
          Sky<span className="text-[#C8F400]">Mart</span>
        </h2>
      </div>
      <div className="flex flex-col p-6 rounded-2xl bg-[#111111] mt-8 w-100 border-[#292929] border">
        <h3 className="text-white text-3xl font-semibold">Create account</h3>
        <p className="text-[#6F6F6F] text-sm ">
          Join SkyMart and start shopping
        </p>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-4 mt-8"
        >
          {/* {------- Name --------} */}
          <div className="text-[#6F6F6F] bg-[#1D1D1D] px-4 border rounded-xl active:border-[#C8F400]">
            <i class="ri-user-line"></i>
            <input
              {...register("name", {
                required: "name is required",
              })}
              id="name"
              className="text-white bg-[#1D1D1D] p-2 w-[90%]  rounded-xl outline-none focus:border-none"
              placeholder="Full name"
              type="text"
            />
          </div>
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          {/* {-------- Email --------} */}
          <div className="text-[#6F6F6F] bg-[#1D1D1D] px-4 border rounded-xl active:border-[#C8F400]">
            <i class="ri-mail-line"></i>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              id="email"
              className="text-white bg-[#1D1D1D] p-2 w-[90%] rounded-xl outline-none "
              placeholder="Email address"
              type="text"
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          {/* {------ Password ------} */}
          <div className="text-[#6F6F6F] bg-[#1D1D1D] px-4 border rounded-xl active:border-[#C8F400]">
            <i class="ri-lock-line"></i>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters is required",
                },
              })}
              id="password"
              className="text-white bg-[#1D1D1D] p-2 w-[90%] rounded-xl outline-none "
              placeholder="Password (min 6 chars)"
              type="password"
            />
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          {/* {------ confirm Password ------} */}
          <div className="text-[#6F6F6F] bg-[#1D1D1D] px-4 border rounded-xl active:border-[#C8F400]">
            <i class="ri-lock-line"></i>

            <input
              {...register("password", {
                required: "Password is required",
              })}
              id="password"
              className="text-white bg-[#1D1D1D] p-2 w-[90%] rounded-xl outline-none "
              placeholder="Confirm password"
              type="password"
            />
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          <button
            type="submit"
            disabled={!isValid}
            className="cursor-pointer font-semibold f-full bg-[#C8F400] p-2 rounded-2xl hover:bg-[#71841b]"
          >
            Create Account →
          </button>
        </form>

        <p className="text-[#6F6F6F] w-fit mx-auto mt-5">
          Already have an account? 
          <span
            className="text-[#C8F400] cursor-pointer"
            onClick={() => navigate("/")}
          > Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
