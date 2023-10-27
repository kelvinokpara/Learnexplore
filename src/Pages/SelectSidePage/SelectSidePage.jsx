import Hero from "../../components/reuseableComponents/Hero/Hero";
import student from "../../assets/Icons/userlog-icons/student.png";
import teacher from "../../assets/Icons/userlog-icons/teacher.png";
import Button from "../../components/reuseableComponents/button/button";

const SelectSidePage = () => {
  return (
    <div className="flex w-[screen]">
      <div className="w-2/4">
        <Hero />
      </div>
      <div>
        <div className="flex flex-col ml-auto mr-auto">
          <p className="mb-[27px]">Back</p>
          <p className="font-[Sansita] text-[44px] mb-[27px]">Select User Category</p>

          <div className="flex items-center font-[poppins] gap-[30px] border rounded-[20px] w-[500px] h-[130px] mb-[27px]">
            <img src={student} alt="student" />
            <span className="text-[28px] font-[600]">Student</span>
          </div>

          <div className="flex items-center font-[poppins] gap-[30px] border rounded-[20px] w-[500px] h-[130px] mb-[27px]">
            <img src={teacher} alt="teacher" />
            <span className="text-[28px] font-[600]">Teacher</span>
          </div>

          {/* <button className="">Signup</button> */}
          <Button width="full" defButton="blue">Sign up</Button>
          <div className="mt-[27px] font-[400] font-[poppins] text-[16px] gap-[20px] flex text-center justify-center">
            <span className="">Already have an account?</span>
           
              <span className="text-[red]"><a href="/login">Login </a></span>
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default SelectSidePage;
