import { FaAngleLeft } from "react-icons/fa";
import Input from "../reuseableComponents/inputs/Input";
import Button from "../reuseableComponents/Button/Button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
    }

    if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    if (password === "") {
      setPasswordError("password is required");
      return(setTimeout(()=>{
        setPasswordError("")
      },3000))
    } else if (password.length < 8) {
      setPasswordError("password should be more than 7 character");
        return(setTimeout(()=>{
            setPasswordError("")
          },3000))
    } else {
      setPasswordError("");
    }
    if (confirmPassword === "") {
      setConfirmPasswordError("confirm password is required");
        return(setTimeout(()=>{
            setConfirmPasswordError("")
          },3000))
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("confirm password should match password");
        return(setTimeout(()=>{
            setConfirmPasswordError("")
          },3000))
    } else {
      setConfirmPasswordError("");
    }

    const data = {
      password,
      confirmPassword,
    };

    console.log(data);

    if (
      password == "" ||
      confirmPassword == "" ||
      password.length < 7 ||
      confirmPassword.length < 7
    ) {
      setIsFormSubmitted(false);
    } else {
      setIsFormSubmitted(true);
    }

    setPassword("");
    setConfirmPassword("");
  };
  const handleClosePopup = () => {
    setIsFormSubmitted(false);
  };
  console.log(password, confirmPassword);

  return (
    <div className="w-full md:w-[50%] lg:w-[50%] h-full ">
      <div className=" w-8/12 md:w-6/12 lg:w-6/12 mx-auto mt-20 h-[300px]">
        <div className="flex justify-start mb-2 items-center gap-2">
          <FaAngleLeft />
          <p className="font-poppins">Back</p>
        </div>
        <p className="font-bold font-inter pb-2 text-2xl">
          Create New Password
        </p>
        <p className="text-xs pb-4 font-poppins">Enter new password</p>
        <div className="relative">
          <Input
            value={password}
            type={showPassword}
            name="password"
            useType="auth"
            label={"password"}
            onChange={changeHandler}
            placeHolder={"password"}
          />
          {showPassword === "password" ? (
            <AiOutlineEye
              className="absolute top-4 text-xl right-4"
              onClick={() => setShowPassword("text")}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute top-4 text-xl right-4"
              onClick={() => setShowPassword("password")}
            />
          )}
        </div>
        <p className="italic pb-4 font-poppins text-xs text-red-400">
          {passwordError}
        </p>
        <div className="relative">
          <Input
            type={showPassword}
            name="confirmPassword"
            useType="auth"
            label={"confirm password"}
            value={confirmPassword}
            onChange={changeHandler}
            placeHolder={"confirm password"}
          />
          {showPassword === "password" ? (
            <AiOutlineEye
              className="absolute top-4 text-xl right-4"
              onClick={() => setShowPassword("text")}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute top-4 text-xl right-4"
              onClick={() => setShowPassword("password")}
            />
          )}
        </div>
        <p className="italic font-poppins pb-4 text-xs text-red-400">
          {confirmPasswordError}
        </p>
        <Button
          type="submit"
          onClick={handleSubmit}
          defButton="blue"
          width="full"
        >
          Reset Password
        </Button>
      </div>
      {isFormSubmitted && (
        <div className="fixed top-0 left-0 w-screen bg-opacity-80 h-screen bg-black">
          <div className="absolute rounded-md shadow w-[320px] h-[250px] top-[30%] left-[20%] bg-white lg:left-[38%]">
            <div className="mx-auto mt-6 flex justify-center items-center border-4 border-green-400 rounded-full mb-0  w-[60px] h-[60px]">
              <TiTick className="text-6xl text-green-400" />
            </div>
            <p className="font-poppins text-sm text-center pt-2 pb-4 ">
              You have successfully reset your password
            </p>
            <Link to="/login">
              <button
                className="bg-blue-400 text-center w-10/12 mx-6 p-2 my-0 rounded-md text-white border-grayColor"
                onClick={handleClosePopup}
              >
                proceed to login
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePassword;
