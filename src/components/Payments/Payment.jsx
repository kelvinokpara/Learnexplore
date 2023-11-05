import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { checkoutPriceData } from "../../assets/Data/pricingData";
import { paymentMethodData } from "../../assets/Data/pricingData";
import Order from "./Order";

const Payment = () => {
    const [items, setItems] = useState(checkoutPriceData)
    const [payment, setPayment] = useState(paymentMethodData)

    const handleClick =(index)=>{
        const singleItem = items.map((item)=>({
            ...item, isChecked: item.id === index ? !item.isChecked : false
    }))
    
        setItems(singleItem)
    }

    const handlePayment =(payId)=>{
        const paymentOption = payment.map((item)=>({
            ...item, checked:item.id === payId ? !item.checked : false
        }))

        setPayment(paymentOption)
    }

   const checkedItems = items.filter((item)=>item.isChecked)
  return (
    <div className="p-0 m-4 border-box">
      <div className="flex justify-center my-4 w-full gap-4">
        <div className="w-[500px] h-max  border-2 rounded-lg  shadow">
          <div className="flex items-center relative justify-center">
            <div className="w-[30px] h-[30px] hover:bg-[grey] cursor-pointer absolute left-2 top-2 bg-searchBg rounded-full border">
              <FaAngleLeft className="absolute top-[5px] right-2" />
            </div>
            <p className="text-center text-lg pt-2 font-poppins font-bold">
              Checkout
            </p>
          </div>
          <p className="font-poppins font-semibold p-4">Choose plan</p>
          <div className="w-5/6 mx-auto">
            { items.map((item)=>{
                return(
                    <div key={item.id} onClick={()=>handleClick(item.id)} className="w-full cursor-pointer border p-2 rounded-md m-4 flex justify-between items-center">
                 <div className="flex items-center"  >
                   <input type="checkbox" readOnly checked={item.isChecked} className="w-[15px] accent-orange-600  text-white cursor-pointer  " />
                
                   <p className="pl-4 pt-4 font-poppins font-bold">
                     {item.label} <br />
                     <span className="font-inter font-normal text-xs text-[#7887a8]">{item.desc}</span>
                   </p>
                 </div>
                 <span className="font-bold font-inter text-xl">
                   {item.price}$/<sup className="text-xs text-[#788a8] font-normal">1nos</sup>
                 </span>
               </div>

                )
                 
            })}
           
          </div>
          <p className="p-4 font-poppins font-semibold">Payment method</p>
          <div className="w-5/6 mx-auto">
            { payment.map((item)=>{
                return(
                    <div key={item.id} onClick={()=>handlePayment(item.id)} className="w-full cursor-pointer border p-2 rounded-md m-4 flex justify-between items-center">
                 <div className="flex items-center"  >
                   <input type="checkbox" readOnly checked={item.checked} className="w-[15px] accent-orange-600  text-white cursor-pointer  " />
                
                   <p className="pl-4 font-poppins font-bold">
                     {item.label}
                   </p>
                 </div>
                 <div className="w-[25px] h-[25px]">
                 <img src={item.icon} alt="" className="w-full h-full" />
                 </div>
               </div>

                )
                 
            })}
           
          </div>
        </div>
        <div className="w-[300px] sticky top-0 h-[300px] rounded-lg border-2  shadow">
        {/* {checkedItems.map((item)=>item.price)} */}
            <Order p={checkedItems.map((item)=>item.price)} />
            
        </div>
      </div>
    </div>
  );
};

export default Payment;
