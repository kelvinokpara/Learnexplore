import React from "react";
import Button from "../reuseableComponents/Button/Button";
import contactBg from "../../assets/images/contact-hero.png";
import video1 from "../../assets/images/about-images/about-vid1.png";
import video2 from "../../assets/images/about-images/about-vid2.png";
import Icons from "../../components/reuseableComponents/icons/icons";
import { features1 } from "../../assets/Data/homeData";
import picture from "../../assets/images/about-images/about-testimony.png";
import picture2 from "../../assets/images/about-images/about-story.png";

const Aboutside = () => {
  return (
    <div className="w-screen  min-h-screen flex flex-col gap-40 px-36">
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
      <section>
        <div className="relative z-30 flex justify-center flex-col items-center ">
          <b className="text-[48px] font-inter font-bold text-colors-700">
            Makes Learning
            <span className="text-textLightBlue"> Stress-free</span>
          </b>
          <p className="font-inter text-[16px] font-normal text-slate-500 ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit duis enim velit mollit.
          </p>
        </div>
        <div className="py-1 m-10">
          <div class="grid grid-cols-2 gap-28 place-items-center ">
            <div>
              <img src={video1} alt="video" />
            </div>
            <div>
              <b className="text-[42px] font-poppins font-semibold text-colors-700">
                Our Instructors
              </b>
              <p className="text-[16px] font-inter text-slate-500 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urncus.
              </p>
              <p className="text-[16px] font-inter text-slate-500 font-normal mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultrices risus vitae urna. Mattis tempor est risus purus
                tincidunt. Non ut <br></br>augue<br></br> nulla orci justo
                libero mauris.
              </p>
            </div>
            <div>
              <b className="text-[42px] font-poppins font-semibold text-colors-700">
                Our Marketplace
              </b>
              <p className="text-[16px] font-inter text-slate-500 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urncus.
              </p>
              <p className="text-[16px] font-inter text-slate-500 font-normal mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultrices risus vitae urna. Mattis tempor est risus purus
                tincidunt. Non ut <br></br>augue<br></br> nulla orci justo
                libero mauris.
              </p>
            </div>
            <div>
              <img src={video2} alt="video" />
            </div>
          </div>
        </div>
        <div className="bg-purple-100 h-[200px]">
          {features1.map((feature) => (
            <Icons icons={feature.icon} title={feature.label} />
          ))}
        </div>
      </section>
      <section>
        <div>
          <b className="flex justify-center text-[48px] font-bold font-inter text-colors-700 mb-12">
            What <span className="text-textLightBlue"> people say </span> about
            us
          </b>
        </div>

        <div class="grid grid-cols-2 gap-16 bg-bgGray1 p-10">
          <div>
            <img src={picture} alt="Testimonalpicture" />
          </div>
          <div className="flex-col">
            <div>
              <b className="text-[36px] font-semibold font-inter ">
                Rony Mansa
              </b>
              <p className="font-inter text-[16px] font-normal text-slate-500">
                Students of Rose Art School
              </p>
            </div>
            <div className="relative inline-block p-2 pl-8 pr-2 ">
              <span className="text-4xl absolute top-0 left-0 mt-8 ml-2 text-yellow-500 font-inter">
                “
              </span>
              <p className=" text-slate-500 font-normal text-[16px] py-10 font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                etiam dignissim diam quis enim lobortis scelerisque fermentum
                dui faucibus
              </p>
              <span className="text-4xl absolute bottom-[-45px] right-5 mt-[50px] ml-[-10] text-yellow-500 font-inter">
                ”
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[150px] mb-24">
          <div class="grid grid-cols-2 gap-28  ">
            <div>
              <img src={picture2} alt="picture2" />
            </div>
            <div className="p-[10px] ">
              <b className="text-[42px] font-poppins font-semibold text-colors-700">
                Our <span className="text-textLightBlue">Story</span>
              </b>
              <p className="text-base font-inter text-slate-500 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                etiam dignissim diam quis enim lobortis scelerisque fermentum
                dui
              </p>
              <p className="text-base font-inter text-slate-500 font-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                etiam dignissim diam quis enim lobortis scelerisque fermentum
                dui
              </p>
              <div className="inline">
                <Button defButton="blue">Conact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutside;
