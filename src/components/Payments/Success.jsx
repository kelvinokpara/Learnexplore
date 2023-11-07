import { FaAngleLeft } from "react-icons/fa";
import SuccessLogo from "../../assets/Icons/payment-icons/payment-success.png";
import FailureLogo from "../../assets/Icons/payment-icons/payment-failure.png"
import { Link } from "react-router-dom";
const Success = ({payment=true}) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-white z-20 opacity-100">
        {payment ? (
             <div className="w-[300px] mx-auto mt-6 bg-white border-2 rounded-lg shadow h-[500px]">
             <div className="flex items-center relative justify-center">
               <div className="w-[30px] h-[30px] hover:bg-[grey] cursor-pointer absolute left-2 top-2 bg-searchBg rounded-full border">
                 <FaAngleLeft className="absolute top-[5px] right-2" />
               </div>
               <p className="text-center text-base pt-2 font-poppins font-semibold">
                 Transactions
               </p>
             </div>
             <div className="w-[100px] h-[100px] mx-auto mb-4 mt-12 border-2 rounded-full">
               <img src={SuccessLogo} alt="" className="w-full h-full" />
             </div>
             <p className="text-poppins font-bold text-center">Payment Successful</p>
             <div id="trans" className="text-center mb-4">
               <p className="text-[#7887a8] text-inter text-sm">Transaction ID</p>
               <p className="text-poppins text-[#555] text-sm font-medium">
                 451234786567896
               </p>
             </div>
             <div id="date" className="text-center mb-4">
               <p className="text-[#7887a8] text-inter text-sm">Transaction Time</p>
               <p className="text-poppins text-[#555] text-sm font-medium">
                 10.00Am,23 DEC 2023
               </p>
             </div>
             <div className="w-[95%] mx-auto border mb-4  border-[#7887a8] rounded-lg h-[80px]">
               <div className=" border-b w-[98%] mt-[1px] mx-auto border-b-[#7887a8] mb-2 bg-[#f8f9fc] p-[6px]">
                 <p className="text-poppins font-semibold text-sm pl-2">
                   Order Details
                 </p>
               </div>
               <div className="flex justify-between items-center">
                 <p className="font-inter pl-2 text-[#7887a8] font-medium text-sm">
                   Item
                 </p>
                 <p className="font-poppins pr-2 text-sm font-semibold">
                   Geometry(Course)
                 </p>
               </div>
             </div>
             <Link to={"/"}>
             <button
               className={`w-[95%] mx-2 p-2 cursor-pointer btnGradient1 
                 } text-white rounded-2xl`}
             >
               Continue
             </button>
             </Link>
           </div>
        ): (
            <div className="w-[300px] mx-auto mt-6 bg-white border-2 rounded-lg shadow h-[500px]">
            <div className="flex items-center relative justify-center">
              <div className="w-[30px] h-[30px] hover:bg-[grey] cursor-pointer absolute left-2 top-2 bg-searchBg rounded-full border">
                <FaAngleLeft className="absolute top-[5px] right-2" />
              </div>
              <p className="text-center text-base pt-2 font-poppins font-semibold">
                Transactions
              </p>
            </div>
            <div className="w-[100px] h-[100px] mx-auto mb-4 mt-12 border-2 rounded-full">
              <img src={FailureLogo} alt="" className="w-full h-full" />
            </div>
            <p className="text-poppins font-bold text-center">Payment Failed</p>
            <div id="trans" className="text-center mb-4">
              <p className="text-[#7887a8] text-inter text-sm">Transaction ID</p>
              <p className="text-poppins text-[#555] text-sm font-medium">
                451234786567896
              </p>
            </div>
            <div id="date" className="text-center mb-4">
              <p className="text-[#7887a8] text-inter text-sm">Transaction Time</p>
              <p className="text-poppins text-[#555] text-sm font-medium">
                10.00Am,23 DEC 2023
              </p>
            </div>
            <div className="w-[95%] mx-auto border mb-4  border-[#7887a8] rounded-lg h-[80px]">
              <div className=" border-b w-[98%] mt-[1px] mx-auto border-b-[#7887a8] mb-2 bg-[#f8f9fc] p-[6px]">
                <p className="text-poppins font-semibold text-sm pl-2">
                  Order Details
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-inter pl-2 text-[#7887a8] font-medium text-sm">
                  Item
                </p>
                <p className="font-poppins pr-2 text-sm font-semibold">
                  Geometry(Course)
                </p>
              </div>
            </div>
            <Link to={"/payment"}>
            <button
              className={`w-[95%] mx-2 p-2 cursor-pointer btnGradient1 
                } text-white rounded-2xl`}
            >
              Continue
            </button>
            </Link>
          </div>
        )}
     
    </div>
  );
};

export default Success;
