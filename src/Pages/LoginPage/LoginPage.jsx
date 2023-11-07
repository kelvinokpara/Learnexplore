// import Checkout from "../../components/Payments/Checkout";
// import ContactInput from "../../components/reuseableComponents/inputs/ContactInput";
// import EmailInput from "../../components/reuseableComponents/inputs/EmailInput";
import Hero from "../../components/reuseableComponents/Hero/Hero";
import { positionBoy1 } from "../../assets/images/position-component";
import {
  FaAngleLeft,
  FaApple,
  FaEye,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="md:flex sm:grid w-full ">
      <div className=" w-6/12">
        <Hero
          mainImg={positionBoy1}
          // leftTab={tabLeft}
        />
      </div>
      <div className="m-10  w-6/12  ">
        <h2 className="flex items-center font-medium gap-1">
          <FaAngleLeft /> Back
        </h2>
        <h2 className="mt-5 mb-3 font-medium  text-2xl">Welcome Back</h2>
        <p>
          Not a member?
          <Link to={"/studentSignUp"} className=" cursor-pointer text-red-600">
            <span> Register now</span>
          </Link>
        </p>
        <div className="flex mt-5 mb-5 items-center gap-3">
          <div className=" border text-2xl w-28 items-center rounded h-10 flex justify-center">
            <FaApple />
          </div>
          <div className="border text-2xl w-28 items-center text-blue-500 rounded h-10 flex justify-center ">
            <FaFacebook />
          </div>
          <div className="border text-2xl w-28 items-center text-red-500 rounded h-10 flex justify-center">
            <FaGoogle />
          </div>
        </div>

        <form>
          <fieldset className=" border-t-2 w-[500px]  ">
            <legend className="border rounded-full text-center border-solid block pl-3 pr-3">
              OR
            </legend>
            <fieldset className=" border-t-2 w-[500px] ">
              <legend className=" p-2 ml-3">Email Address</legend>
              <input
                type="text"
                placeholder="johnsmith@gmail.com"
                className="border outline-none  p-2 rounded w-[500px] h-10"
              />
            </fieldset>
            <div className="border rounded mt-10 w-[500px] h-10 flex items-center justify-between">
              <input
                type="password"
                className=" outline-none p-2"
                placeholder="password"
              />
              <FaEye className=" m-2" />
            </div>
          </fieldset>
          <div className="flex items-center w-[500px] justify-between mt-5">
            <div className="flex items-center gap-2 justify-between ">
              <input type="checkbox" name="" id="" />
              <label>Remember</label>
            </div>

            <div>
              <h2 className=" font-bold">Forget?</h2>
            </div>
          </div>
        </form>
        <button className=" mt-5 mb-5 text-white font-bold bg-blue-500 rounded-md w-[500px] h-[50px]">
          Login
        </button>
        <div>
          <h2 className="flex gap-2 justify-center">
            Not a member?{" "}
            <Link to={"/studentSignUp"}>
              <span className="cursor-pointer text-red-600">Register now</span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
