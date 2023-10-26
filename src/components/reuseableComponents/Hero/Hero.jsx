import hero_img from "../../../assets/images/hero_img.png";
import Poly from "../../../assets/images/poly.png";
import polygon from "../../../assets/images/polygon.png";
import book from "../../../assets/images/book.png";
import esc from "../../../assets/images/esc.png";
import health from "../../../assets/images/health.png";
import chat from "../../../assets/images/chat.png";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import image5 from "../../../assets/images/image5.png";
import RingCircle from "../icons/ringcircle";

const Hero = ({ mainImg, leftTab, rightTab, bottomTab }) => {
  return (
    <div className=" flex items-center justify-center py-36 px-20 border-box bg-pink-100">
      <div className="w-[650px] h-[650px]">
        <div className="w-[280px] h-[280px] flex justify-center items-center rounded-full bg-heroColor relative">
          <div className=" relative mb-16 w-full h-[120%] grid-center overflow-hidden rounded-full">
            <img src={mainImg} alt="" className="w-[75%]" />
          </div>

          <img
            src={Poly}
            alt="polygon"
            className="absolute top-[-10%] left-[30px]"
          />
          <img
            src={book}
            alt="book"
            className="absolute top-[-15%] left-[80%] bg-yellow-400"
          />
          <img
            src={esc}
            alt="esclipse"
            className="absolute bottom-[20px] left-[100%] w-14"
          />
          <img
            src={polygon}
            alt="polygon"
            className="absolute bottom-[-1%] left-[82%]"
          />
          {leftTab ? (
            leftTab
          ) : (
            <div className="absolute border rounded-md bg-white top-[23%] p-2 left-[-40%] h-15 mb-6 ">
              <div className="">
                <img
                  src={health}
                  alt="health"
                  className=" bg-blue-500 ml-20 mt-1"
                />
              </div>
              <h3>Learn at your own speed</h3>
            </div>
          )}

          {rightTab ? (
            rightTab
          ) : (
            <div className="absolute flex border rounded-md bg-white top-[10%] right-[-80%] h-14 p-2">
              <img src={chat} alt="chat" />
              <div className="flex flex-col justify-center ml-1">
                <b>Congratulations!</b>
                <t>You are a graduate of learning</t>
              </div>
            </div>
          )}
          {bottomTab ? (
            bottomTab
          ) : (
            <div className="absolute border rounded-md bottom-[-10%] left-[12%] p-2 m-3 h-22 bg-white">
              <RingCircle />
            </div>
          )}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Hero;
