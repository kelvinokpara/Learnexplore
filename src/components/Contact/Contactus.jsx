import React from "react";
import contactBg1 from "../../assets/images/contact-us-bg.png";
import mailimage from "../../assets/Icons/contact-icons/contact-mail.png";
import phoneimage from "../../assets/Icons/contact-icons/contact-phone.png";
import faceimage from "../../assets/Icons/contact-icons/contact-facebook.png";
import twitterimage from "../../assets/Icons/contact-icons/contact-twitter.png";
import instagramimage from "../../assets/Icons/contact-icons/contact-instagram.png";
import Button from "../reuseableComponents/Button/Button";
import Input from "../../components/reuseableComponents/inputs/Input";
import { CiMail } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";

const contactus = () => {
  return (
    <div className=" w-screen  min-h-screen flex flex-col gap-40 px-36">
      <section className=" relative pt-[105px] pl-[70px] ">
        <img
          src={contactBg1}
          alt=""
          className="w-[150%] absolute top-0 left-0 right-0 bottom-0"
        />
        <div className="flex align-middle justify-center bottom-[40px] gap-28 relative z-10 text-white">
          <div className="">
            <div className="">
              <b className="text-[64px] font-poppins font-bold">Contact Us</b>
              <p className="font-inter text-base font-normal mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
                a gravida tortor vitae et nulla. Pulvinar massa nullam enim mi
                eu hendrerit. Massa massa in tortor enim.
              </p>
              <div className="grid grid-cols-2 mt-16">
                <div className="flex gap-3">
                  <img className="h-10" src={mailimage} alt="mailImage" />
                  <div>
                    <p>Email address</p>
                    <b>learnXplore@gmail.com</b>
                  </div>
                </div>
                <div className="ml-32">
                  <p>Social Links</p>
                  <div className="flex gap-4">
                    <img src={faceimage} alt="facebooklogo" />
                    <img src={twitterimage} alt="twiiterlogo" />
                    <img src={instagramimage} alt="insagramlogo" />
                  </div>
                </div>
                <div className="flex mt-8 gap-3 mb-8">
                  <img className="h-10" src={phoneimage} alt="phone image" />
                  <div>
                    <p>Telephone Number</p>
                    <b>0141 563 5458</b>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <b className="font-poppins font-bold text-[36px] text-Yellow ">
                stay in touch
              </b>
              <p className="font-inter text-[18px] font-medium">
                Subscribe to newsletter
              </p>
              <div className="py-1 px-1 pl-3 flex items-center bg-white rounded-full w-80 h-12">
                <input
                  type="text"
                  placeholder="Email Id"
                  className=" w-full  bg-white outline-none"
                />
                <Button defButton="blue">Send</Button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-opacity-10 bg-white mr-5">
              <div className="w-[450px] p-4">
                <Input
                  type={"text"}
                  useType="contact"
                  label={"Fullname"}
                  placeHolder={"John Doe"}
                  icon={<HiOutlineUser />}
                />
                <Input
                  type={"text"}
                  useType="contact"
                  label={"Email address"}
                  placeHolder={"123@example.com"}
                  icon={<CiMail />}
                />
                <Input
                  type={"text"}
                  useType="contact"
                  label={"subject"}
                  placeHolder={"Enter your motive of message"}
                />
                <Input
                  type={"text"}
                  useType="textarea"
                  label={"Message"}
                  placeHolder={"Enter your message"}
                  icon={<CiMail />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contactus;
