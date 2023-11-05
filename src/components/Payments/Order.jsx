import Geo from "../../assets/Icons/payment-icons/geo.png";
import Crown from "../../assets/Icons/payment-icons/crown.png";
const Order = ({p,singlePayment=false}) => {
  return (
    <div className="w-full h-full">
      <p className="font-poppins font-semibold p-2">Order Details</p>
      
      <div className="flex justify-between m-2">
      {singlePayment ? (
         <div className="flex items-center pb-2">
         <div className="w-[30px] h-[30px]  rounded-md bg-[#ff7d5169]">
           <img src={Geo} className="w-5/6 h-5/6 pl-2 pt-2" alt="" />
         </div>
         <p className="pl-2 font-poppins font-semibold text-sm">
           Geometry <br />
           <span className="font-inter text-xs text-[#7887a8]">Roy Nina</span>
         </p>
       </div>
      ):(
        <div className="flex items-center pb-2">
        <div className="w-[30px] h-[30px]  rounded-md bg-[#ff7d51]">
          <img src={Crown} className="w-5/6 h-5/6 mx-auto" alt="" />
        </div>
        <p className="pl-2 font-poppins font-semibold text-sm">
          Monthly Plan <br />
          <span className="font-inter text-xs text-[#f9a31e]">Membership plan</span>
        </p>
      </div>
      )}
       
        <div>
          <p className="font-poppins font-semibold text-[#f9a31e]">
            {p ? p : "20"} <sup>$</sup>
          </p>
          <p className="font-inter text-xs text-[#7887a8]">Price</p>
        </div>
      </div>
      <p className="font-poppins font-semibold pb-2 pl-2">Billing Details</p>
      <div className="m-2">
        <span className="flex justify-between items-center pb-2">
          <p className="font-inter text-[#7887a8] text-sm">Geometry</p>
          <p className="font-inter text-[#7887a8] text-sm">20.00$</p>
        </span>
        <span className="flex justify-between items-center pb-2">
            <p className="font-inter text-[#7887a8] text-sm">Other Fees</p>
            <p className="font-inter text-[#7887a8] text-sm">0.00$</p>
        </span>
        <span className="flex justify-between items-center">
            <p className="font-inter text-[#7887a8] text-sm">Total Charge</p>
            <p className="font-inter text-[#f9a31e] text-sm">20.00$</p>
        </span>
      </div>
      <p>Payment Method</p>
    </div>
  );
};

export default Order;
