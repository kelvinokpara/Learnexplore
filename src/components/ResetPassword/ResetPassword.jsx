import Hero from "../reuseableComponents/Hero/Hero";
import Boy from "../../assets/images/position-component/position-boy2.png";
import { FaAngleLeft } from "react-icons/fa";
import Input from "../reuseableComponents/inputs/Input";
import Button from "../reuseableComponents/Button/Button";
import { useState } from "react";
import CreatePassword from "../CreatePassword/CreatePassword";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [error, setError] = useState("");

  const emailHandler = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      console.log(email, "ll");
    }
  };

  const resetHandler = () => {
    console.log("yaya toure");
    if (email === "") {
      alert("hola");
      setError("input field cannot be empty");
      return setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setError("");
    }

    console.log(email);

    setResetPassword(true);
  };
  return (
    <div className="p-0 m-10 border-box">
      <div className="flex justify-center  flex-wrap items-center w-10/12 mx-auto my-0 h-[500px]">
        <div className="w-[50%] h-full hidden md:flex lg:flex">
          <div className="w-full h-full  rounded-lg">
            <Hero bg="bg-[#ff7d5140]" mainImg={Boy} />
          </div>
        </div>
        {!resetPassword && (
          <div className="w-full md:w-[50%] lg:w-[50%] h-full ">
            <div className=" w-8/12 md:w-6/12 lg:w-6/12 mx-auto mt-20 h-[300px]">
              <div className="flex justify-start mb-2 items-center gap-2">
                <FaAngleLeft />
                <p className="font-poppins">Back</p>
              </div>
              <p className="font-bold font-inter pb-2 text-2xl">
                Reset Password
              </p>
              <p className="text-xs pb-4 font-poppins">
                please input your registered email to receive password reset
                token
              </p>
              <div className="">
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={emailHandler}
                  useType="auth"
                  label={"Email Address"}
                  placeHolder={"Email"}
                />
              </div>
              <p className="text-xs pb-4 text-red-400 font-poppins italic">
                {error}
              </p>
              <div onClick={resetHandler}>
                <Button defButton="blue" width="full">
                  Reset Password
                </Button>
              </div>
            </div>
          </div>
        )}

        {resetPassword && <CreatePassword />}
      </div>
    </div>
  );
};

export default ResetPassword;
