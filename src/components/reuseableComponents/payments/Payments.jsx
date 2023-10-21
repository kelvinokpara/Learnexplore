import React from "react";

const PaymentList = ({ title, price, image }) => {
  return (
    <div>
      <div className="w-[344px] border-[#E6E9F0] bg-[#FFF] p-[22px] rounded-[20px] mb-[150px]">
        <div className="flex items-center gap-[20px] mb-[20px]">
          <img
            src={image}
            alt="video"
            className="bg-[#0AAFFF] p-[15.227px] rounded-[12.182px]"
          />
          <span className="text-[22px] font-semibold">{title}</span>
        </div>
        <p className="mb-[20px]">
          <span className="font-bold text-[28px]">{price}$</span>
          <span className="text-[#7887A8] text-[18px]">/month</span>
        </p>

        <button className="bg-[#0AAFFF] w-[300px] text-white py-[16.5px] text-[18px] rounded-[60px] mb-[15px]">
          Try for free
        </button>
        <button className="bg-yellow-50 w-[300px] py-[10px] rounded-[30px] flex items-center gap-[10px] pl-[15px] text-[12px] mb-[25px]">
          <img src="/home/information.png" alt="" />
          Pay monthly cancle anytime.
        </button>

        <p className="flex gap-[8px] mb-[10px]">
          <span>
            <img
              src="/home/Vector.png"
              alt=""
              className="bg-[#EAFBE7] border-[#2EBC17] rounded-[22.907px]  p-[5px]"
            />
          </span>
          <span className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </p>

        <p className="flex gap-[8px] mb-[10px]">
          <span>
            <img
              src="/home/Vector.png"
              alt=""
              className="bg-[#EAFBE7] border-[#2EBC17] p-[5px] rounded-[22.907px]"
            />
          </span>
          <span className="text-[14px]">Lorem ipsum dolor onsectetur.</span>
        </p>

        <p className="flex gap-[8px] mb-[10px];">
          <span>
            <img
              src="/home/Vector.png"
              alt=""
              className="bg-[#EAFBE7] border-[#2EBC17] p-[5px] rounded-[22.907px]"
            />
          </span>
          <span className="text-[14px]">
            Lorem ipsum dolor sit amet, adipiscing elit. Nullam accumsan ut
            arcu.
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaymentList;
