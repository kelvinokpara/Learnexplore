import Hero from "../../components/reuseableComponents/Hero/Hero";
import student from "../../assets/Icons/userlog-icons/student.png";
import teacher from "../../assets/Icons/userlog-icons/teacher.png";
import Button from "../../components/reuseableComponents/Button/Button.jsx";
import positiongirl1 from "../../assets/images/position-component/positiongirl1.png";
import tickCircle from "../../assets/Icons/tickCircle.png";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
const SelectSide = () => {
  const [role, setRole] = useState(null);

  const navigate = useNavigate();

  console.log(role)

  const [isdisabled, setIsDisabled] = useState(true);
  return (
    <div className="flex w-[screen]">
      <div className="w-2/4">
        <Hero mainImg={positiongirl1} />
      </div>
      <div className="grid place-items-center w-2/4 ">
        <div className="flex flex-col ">
          <p className="mb-[27px]">Back</p>
          <p className="font-[Sansita] text-[44px] mb-[27px]">
            Select User Category
          </p>

          <div
            className="flex items-center font-[poppins] gap-[30px] border rounded-[20px] w-[500px] h-[130px] mb-[27px] hover:bg-studentHue transition-all duration-200"
            onClick={() => {setIsDisabled((prev) => !prev);  setRole("student")}}
          >
            <img
              src={student}
              alt="student"
              className="hover:bg-[#F8C069] rounded-[20px] ml-[15px]"
            />
            <span className="text-[28px] font-[600] hover:text-white">
              Student
            </span>
            <span className="relative bottom-[40px] left-[170px]">
              <img src={tickCircle} alt="" />
            </span>
          </div>

          <div
            className="flex items-center font-[poppins] gap-[30px] border rounded-[20px] w-[500px] h-[130px] mb-[27px]  hover:bg-teacherHue transition-all duration-200"
            onClick={() =>{setIsDisabled((prev) => !prev) ; setRole("teacher")}}
          >
            <img
              src={teacher}
              alt="teacher"
              className="hover:bg-[#759491] rounded-[20px] ml-[15px]"
            />
            <span className="text-[28px] font-[600] hover:text-white">
              Teacher
            </span>
            <span className="relative bottom-[40px] left-[170px]">
              <img src={tickCircle} alt="" />
            </span>
          </div>

          {/* <button className="">Signup</button> */}
          <div>
            <Button
              width="full"
              defButton="blue"
              disable={isdisabled}
              onClick={() =>
                {
                role === "student"
                  ? navigate("/login")
                  : role === "teacher"
                  ? navigate("/teacherSignUp")
                  : ""

                return  console.log('hello')
                }
              }
            >
              Sign up
            </Button>
          </div>
          <div className="mt-[27px] font-[400] font-[poppins] text-[16px] gap-[20px] flex text-center justify-center">
            <span className="">Already have an account?</span>

            <span className="text-[red]">
              <a href="/login">Login </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSide;
