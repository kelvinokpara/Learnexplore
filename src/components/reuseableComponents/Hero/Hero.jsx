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

const Hero = () => {
  return (
    <div className="m-0 p-0 border-b0x bg-pink-100">
      <div className="w-screen">
        <div className="w-[300px] h-[300px] border-2 bg-red-400 mx-auto my-[100px] rounded-full bg-heroColor relative">
          <div className="w-[169%] h-[115%] absolute ml-[-27%]  rounded-full top-0">
            <img
              src={hero_img}
              alt=""
              className=" absolute top-[-72px] h-full w-[100%] bg-cover "
            />
          </div>
          <img src={Poly} alt="polygon" className="absolute top-[-10%] " />
          <img
            src={book}
            alt="book"
            className="absolute top-[-15%] left-[80%] bg-yellow-400"
          />
          <img
            src={esc}
            alt="esclipse"
            className="absolute bottom-[-2%] left-[100%]"
          />
          <img
            src={polygon}
            alt="polygon"
            className="absolute bottom-[-10%] left-[72%]"
          />
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
          <div className="absolute flex border rounded-md bg-white top-[10%] right-[-80%] h-14 p-2">
            <img src={chat} alt="chat" />
            <div className="flex flex-col justify-center ml-1">
              <b>Congratulations!</b>
              <t>You are a graduate of learning</t>
            </div>
          </div>
          <div className="absolute border rounded-md bottom-[-10%] left-[12%] p-2 m-3 h-22 bg-white">
            <div>
              <p>100k+ students joined</p>
              <div className="flex mt-3 ">
                <div className="relative flex">
                  <img
                    src={image1}
                    className=" absolute top-[1%] left-[80%] "
                    alt="image"
                  />
                  <img
                    src={image2}
                    className="absolute left-[155%] top-[1%] "
                    alt="image"
                  />
                  <img
                    src={image3}
                    className="absolute right-[-218%] top-[1%] "
                    alt="image"
                  />
                  <img
                    src={image4}
                    className="absolute right-[-295%] top-[1%] "
                    alt="image"
                  />
                  <img
                    src={image5}
                    className="left-[-25%]  "
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
