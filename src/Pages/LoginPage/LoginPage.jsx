// import Checkout from "../../components/Payments/Checkout";
// import ContactInput from "../../components/reuseableComponents/inputs/ContactInput";
// import EmailInput from "../../components/reuseableComponents/inputs/EmailInput";

import {
  FaAngleLeft,
  FaApple,
  FaEye,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Hero from "../../Components/reuseableComponents/Hero/Hero";
import { positionBoy1 } from "../../assets/Images/position-component";
import EmailInput from "../../Components/reuseableComponents/inputs/EmailInput";

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
        <div className="ml-16">
          <h2 className="flex items-center font-medium gap-1">
            <FaAngleLeft /> Back
          </h2>
          <h2 className="mt-5 mb-3 font-medium  text-2xl">Welcome Back</h2>
          <p>
            Not a member?
            <Link
              to={"/studentSignUp"}
              className=" cursor-pointer text-[#F06544]"
            >
              <span className=" text-[#F06544]"> Register now</span>
            </Link>
          </p>
        </div>
        <div className="flex mt-5 mb-5 items-center gap-3 justify-center">
          <div className=" border text-2xl w-28 items-center rounded-xl h-10 flex justify-center">
            <FaApple />
          </div>
          <div className="border text-2xl w-28 items-center text-blue-500 rounded-xl h-10 flex justify-center ">
            <FaFacebook />
          </div>
          <div className="border text-2xl w-28 items-center text-red-500 rounded-xl h-10 flex justify-center">
            <FaGoogle />
          </div>
        </div>

        <form>
          <div className="flex justify-center">
            <fieldset className=" border-t-2 w-[400px] ">
              <legend className="border mb-5  rounded-full text-center border-solid block pl-3 pr-3">
                OR
              </legend>
              <EmailInput placeholder={"johnsmith@gmail.com"} />
            </fieldset>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center w-[500px] justify-between mt-5">
              <div className="flex items-center gap-2 justify-between ">
                <input type="checkbox" name="" id="" />
                <label>Remember</label>
              </div>

              <div>
                <h2 className=" font-bold">Forget?</h2>
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-center">
          <button className=" mt-5 mb-5 text-white font-bold bg-[#0AAFFF] rounded-full w-[500px] h-[50px]">
            Login
          </button>
        </div>
        <div>
          <h2 className="flex gap-2 justify-center">
            Not a member?{" "}
            <Link to={"/studentSignUp"}>
              <span className="cursor-pointer text-[#F06544]">
                Register now
              </span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
