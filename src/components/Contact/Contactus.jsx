import React from 'react';
import contactBg1 from "../../assets/images/contact-us-bg.png";
import ContactInput from '../reuseableComponents/inputs/ContactInput';
import Input from 'postcss/lib/input';

const contactus = () => {
  return (
    <div className=" w-screen  min-h-screen flex flex-col gap-40 px-36">
      <section className="bg-slate-500 relative pt-[105px] pl-[70px] ">
        <img
          src={contactBg1}
          alt=""
          className="w-[150%] absolute top-0 left-0 right-0 bottom-0"
        />
        <div className="w-2/5 flex gap-28 relative z-10 text-white">
          <div className="">
            <div>
              <b>Contact Us</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                a gravida tortor vitae et nulla. Pulvinar massa nullam enim mi
                eu hendrerit. Massa massa in tortor enim.
              </p>
              <div className='grid grid-cols-2'>
                <p>ayyyy</p>
                <p>ayyyy</p>
                <p>ayyyy</p>
              </div>
            </div>
            <div>
                <b>stay in touch</b>
                <p>Subscribe to newsletter</p>
                <placeholder>Email us</placeholder>
            </div>
          </div>
          <div>
           BTAT
          </div>
        </div>
      </section>
    </div>
  );
}

export default contactus

