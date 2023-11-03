import React from "react";
import Button from "../reuseableComponents/Button/Button";
import contactBg from "../../assets/images/contact-hero.png";

const Aboutside = () => {
  return (
    <div className="w-screen  h-screen px-36">
      <section className="bg-slate-500 relative pt-[105px] pl-[70px] ">
        <img
          src={contactBg}
          alt=""
          className="w-[150%] absolute top-0 left-0 right-0 bottom-0"
        />

        <div className="w-2/5 flex flex-col gap-9 relative z-10">
          <b className="font-bold text-[44px] font-poppins text-white">
            We promote <span className="text-textOrange">active</span> and{" "}
            <span className="text-textLightBlue">independent </span>
            learning
          </b>
          <p className="font-inter text-[16px] font-normal text-white w-full">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="inline">
            <Button defButton="blue">Conact Us</Button>
          </div>
        </div>
      </section>
      <div>
        <b>
          Makes Learning{" "}
          <span className="text-textLightBlue text-[48px] font-inter">
            Stress-free
          </span>
        </b>
        <p className="font-inter text-[16px] font-normal bg-slate-500 ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit duis enim velit mollit.
        </p>
      </div>
    </div>
  );
};

export default Aboutside;
