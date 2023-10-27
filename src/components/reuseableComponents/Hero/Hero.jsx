import Poly from "../../../assets/images/poly.png";
import polygon from "../../../assets/images/polygon.png";
import book from "../../../assets/Images/position-component/position-book.png";
import esc from "../../../assets/images/esc.png";
import tabLeft from "../../../assets/Images/position-component/tab-left-1.png";
import tabRight from "../../../assets/Images/position-component/tab-right-1.png";
import tabBottom from "../../../assets/Images/position-component/tab-bottom-1.png";

const Hero = ({ mainImg, leftTab, rightTab, bottomTab, bg }) => {
  return (
    <div
      className={`w-full h-[650px] grid-center rounded-3xl ${
        bg ?? "bg-pink-100"
      }`}
    >
      <div className="w-[280px] h-[280px] flex justify-center items-end rounded-full bg-heroColor relative">
        <div className=" relative w-full h-[130%] grid-center overflow-hidden rounded-full">
          <img src={mainImg} alt="" className="w-11/12 object-contain" />
        </div>

        <img
          src={Poly}
          alt="polygon"
          className="absolute top-[-10%] left-[10px]"
        />
        <img src={book} alt="book" className="absolute top-[-15%] right-0" />
        <img
          src={esc}
          alt="esclipse"
          className="absolute bottom-[20px] left-[100%] w-14"
        />
        <img
          src={polygon}
          alt="polygon"
          className="absolute bottom-[-1%] right-[10px]"
        />
        {leftTab ? (
          leftTab
        ) : (
          <div className="absolute border rounded-md bg-white top-[23%] left-[-40%]  mb-6 ">
            <img src={tabLeft} alt="health" className=" w-40" />
          </div>
        )}

        {rightTab ? (
          rightTab
        ) : (
          <div className="absolute top-[25%] right-[-45%]">
            <img src={tabRight} alt="health" className=" w-48" />
          </div>
        )}
        {bottomTab ? (
          bottomTab
        ) : (
          <div className="absolute w-52 bottom-[-20%] left-10  ">
            <img src={tabBottom} alt="" />
          </div>
        )}
      </div>

      {/*  */}
    </div>
  );
};

export default Hero;
