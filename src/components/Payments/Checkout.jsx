import Card_1 from "../../assets/Icons/payment-icons/card1.png";
import Card_2 from "../../assets/Icons/payment-icons/card2.png";
import { FaAngleLeft } from "react-icons/fa";
import Input from "../reuseableComponents/inputs/Input";
import { useState } from "react";
 const Checkout = () => {
  const initialValues = {
    cardNumber: "",
    holderName: "",
    expiryDate: "",
    cvv: "",
  };
  const [input, setInput] = useState(initialValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput((curr) => ({
      ...curr,
      [name]: value,
    }));
  };

  return (
    <div className=" w-max-sm md:w-[500px] h-max  border-2 rounded-lg  shadow">
      <div className="flex items-center relative justify-center">
        <div className="w-[30px] h-[30px] hover:bg-[grey] cursor-pointer absolute left-2 top-2 bg-searchBg rounded-full border">
          <FaAngleLeft className="absolute top-[5px] right-2" />
        </div>
        <p className="text-center text-lg pt-2 font-poppins font-bold">
          Checkout
        </p>
      </div>
      <p className="font-poppins font-semibold p-4">Details</p>
      <div className="w-[95%] mx-auto h-[150px] mb-4 flex justify-center gap-4">
        <div className="w-[60%] ">
          <img src={Card_1} alt="" className="w-full h-full" />
        </div>
        <div className="w-[40%] ">
          <img src={Card_2} alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="w-[95%] mx-auto">
        <div className="flex justify-between items-center">
          <Input
            label={"Card number"}
            name={"cardNumber"}
            value={input.cardNumber}
            onChange={changeHandler}
            placeHolder={"8888 2344 6754 2334"}
          />
          <Input
            label={"Card holder name"}
            name={"holderName"}
            type={"text"}
            value={input.holderName}
            onChange={changeHandler}
            placeHolder="Roy Nina"
          />
        </div>
        <div className="flex justify-between mb-4 item-center">
          <Input
            label={"Expiry date"}
            name={"expiryDate"}
            value={input.expiryDate}
            onChange={changeHandler}
            placeHolder={"08/24"}
          />
          <Input
            label={"CVV"}
            name={"cvv"}
            value={input.cvv}
            onChange={changeHandler}
            placeHolder={"233"}
          />
        </div>
      </div>
      <div className="flex ml-2 gap-4 mb-4 justify-start items-center">
        <input type="checkbox" name="" id="" />
        <p className="text-[#7887a8] font-poppins text-sm">save card details</p>
      </div>
    </div>
  );
};

export default Checkout;
