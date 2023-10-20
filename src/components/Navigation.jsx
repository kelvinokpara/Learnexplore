
import { FiSearch } from "react-icons/fi";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between z-[10] pl-[80px] pr-[80px] pt-[15px] pb-[15px] font-[Inter] w-[100%] fixed bg-white">
      <div className="flex items-center gap-11">
        <div className="flex items-center gap-1">
          <img src="/navigation/logo.png" alt="logo" />
          <div className="font-Sansita text-[31.766px] text-[#141736]">
            Learnxplore
          </div>
        </div>
        <div>Category</div>

        <div className="border flex p-[9px] items-center gap-3 rounded-[20px] w-[370px] bg-[#F8F9FC]">
          <span>
            <FiSearch />
          </span>
          <span>
            <input
              type="text"
              placeholder="Search courses or tutors"
              className="h-[40px] w-[290px] bg-transparent"
            />
          </span>
        </div>
      </div>

      <div className="flex gap-9 text-[grey]">
        <span>Home</span>
        <span>About Us</span>
        <span>Blog</span>
        <span>Contact Us</span>
      </div>

      <div className="flex gap-4">
        
          <button className="border p-3 rounded-[60px] text-[grey] bg-[#BCC3D3] hover:bg-gradient-to-r from-[#cdcdd7fa] to-[#0AAFFF] hover:text-white">
            Sign-up
          </button>
        
        
          <button className="border p-3 rounded-[60px] text-[grey] bg-[#BCC3D3] hover:bg-gradient-to-r from-[#c3c3cefa] to-[#0AAFFF] hover:text-white">
            Log in
          </button>
        
      </div>
    </div>
  );
};

export default Navigation;
