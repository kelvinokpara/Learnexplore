import React from "react";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import image5 from "../../../assets/images/image5.png";

const RingCircle = () => {
  return (
    <div>
      <p>100k+ students joined</p>
      <div className="flex mt-3 ">
        <div className="relative flex justify-center items-center pl-2">
          <img src={image1} className="" alt="image" />
          <img src={image2} className=" ml-[-10px]" alt="image" />
          <img src={image3} className="ml-[-10px] " alt="image" />
          <img src={image4} className="ml-[-10px]" alt="image" />
          <img src={image5} className="ml-[-10px]  " alt="image" />
        </div>
      </div>
    </div>
  );
};

export default RingCircle;
