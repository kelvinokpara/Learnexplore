import React from "react";
import {
  FaAngleLeft,
  FaApple,
  FaEye,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import studentSignUpImage from "../../../assets/images/position-component/position-boy1.png";
import Hero from "../../../Components/reuseableComponents/Hero/Hero";
const StudentSignUp = () => {
  return (
    <React.Fragment>
      <section className="md:flex sm:grid w-full">
        <div className=" w-6/12">
          <Hero mainImg={studentSignUpImage} />
        </div>
        <div className="m-10  w-6/12">
          <h2 className="flex items-center font-medium gap-1">
            <FaAngleLeft /> Back
          </h2>
          <h2 className="mt-5 mb-3 font-medium  text-2xl">Create account</h2>
          <p className="flex ">
            Already have an account?
            <Link to={"/login"}>
              {" "}
              <h2 className=" cursor-pointer  text-red-600"> Login</h2>
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
              <fieldset className=" rounded border-2 w-[500px] ">
                <legend className=" p-2 ml-3">Email Address</legend>
                <input
                  className="outline-none p-2"
                  type="text"
                  placeholder="johnsmith@gmail.com"
                />
              </fieldset>
              <div className="flex justify-between">
                <fieldset className=" rounded border-2 w-[230px] ">
                  <legend className=" p-2 ml-3">Phone number</legend>
                  <input
                    className=" pl-2 outline-none"
                    type="tel"
                    placeholder="000-000-0000"
                  />
                </fieldset>
                <fieldset className=" rounded border-2 w-[230px] ">
                  <legend className=" p-2 ml-3">Age</legend>
                  <input
                    className="outline-none pl-2"
                    type="text"
                    placeholder="6 years"
                  />
                </fieldset>
              </div>
              <fieldset className=" rounded border-2 w-[500px]">
                <legend className=" p-2 ml-3">Name</legend>
                <input
                  className="outline-none pl-2"
                  type="text"
                  placeholder="John Smith"
                />
              </fieldset>
              <div className=" rounded border-2 w-[500px] mt-5 flex items-center justify-between">
                <input
                  className="outline-none p-2"
                  type="password"
                  placeholder="password"
                />
                <FaEye className=" m-2" />
              </div>
            </fieldset>
            <div className=" gap-2 flex mt-5">
              <input className=" pl-2" type="checkbox" name="" id="" />
              <label htmlFor="">I am a parent/Guaradian</label>
            </div>
          </form>
          <button className=" mt-5 mb-5 text-white font-bold bg-blue-500 rounded-md w-[500px] h-[50px]">
            Signup
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StudentSignUp;
