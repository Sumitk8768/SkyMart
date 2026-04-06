import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  let {registerUsers,setLoggedInUser,loggedInUser} = useContext(Auth)

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

let handleFormSubmit= (data)=>{
     let user = registerUsers.find(
      (elem) => elem.email === data.email && elem.password === data.password
     )
     if(!user){
      toast.error("user not found")
      reset()
      return
     }
     else{
      setLoggedInUser(user)
      navigate("/home")
      console.log("log-in-page wala",loggedInUser)
      localStorage.setItem("log user",JSON.stringify(user))
     toast.success("user logged in succsessfully") 
     reset()
    }
}


  return (
    <div className=" bg-[#0D0D0D] w-full h-screen flex flex-col  items-center pt-25">
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
        <h3 className="text-white text-3xl font-semibold">Sign in</h3>
        <p className="text-[#6F6F6F] text-sm ">Enter your credentials to continue</p>

      <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-4 mt-8"
        >
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

          {/* {------ Password ------} */}
          <div className="text-[#6F6F6F] bg-[#1D1D1D] px-4 border rounded-xl active:border-[#C8F400]">
            <i class="ri-lock-line"></i>
            <input
              {...register("password", {
                required: "password is required",
              })}
              id="password"
              className="text-white bg-[#1D1D1D] p-2 w-[90%] rounded-xl outline-none "
              placeholder="Password"
              type="password"
            />
          </div>

          <button className="f-full bg-[#C8F400] p-2 rounded-2xl font-semibold ">
            Sign in →
          </button>
        </form>

        <p className="text-[#6F6F6F] w-fit mx-auto mt-5">
          Don't have an account? 
          <span
            className="text-[#C8F400] cursor-pointer"
            onClick={() => navigate("register")}
          >
             Create one
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
