import {
  tabBottom1,
  tabLeft1,
  tabright1,
  positionPolygonBlue,
  positionPolygonRed,
  positionBook,
  positionEllipse,
} from "../../../assets/Images/position-component";


const Hero = ({ mainImg, leftTab, rightTab, bottomTab, bg }) => {
  return (
    <div
      className={`w-full h-full grid-center rounded-3xl ${bg ?? "bg-pink-100"}`}
    >
      <div className="w-[280px] h-[280px]  flex justify-center items-end rounded-full bg-heroColor relative">
        <div className=" relative w-full h-[130%] grid-center  overflow-hidden rounded-full">
          <img src={mainImg} alt="" className="w-11/12 object-contain" />
        </div>

        <img
          src={positionPolygonBlue}
          alt="polygon"
          className="absolute top-[-10%] left-[10px]"
        />
        <img
          src={positionBook}
          alt="book"
          className="absolute top-[-15%] right-0"
        />
        <img
          src={positionEllipse}
          alt="esclipse"
          className="absolute bottom-[20px] left-[100%] w-14"
        />
        <img
          src={positionPolygonRed}
          alt="polygon"
          className="absolute bottom-[-1%] right-[10px]"
        />
        {leftTab ? (
          leftTab
        ) : (
          <div className="absolute border rounded-md bg-white top-[23%] left-[-40%]  mb-6 ">
            <img src={tabLeft1} alt="health" className=" w-40" />
          </div>
        )}

        {rightTab ? (
          rightTab
        ) : (
          <div className="absolute top-[25%] right-[-45%]">
            <img src={tabright1} alt="health" className=" w-48" />
          </div>
        )}
        {bottomTab ? (
          bottomTab
        ) : (
          <div className="absolute w-52 bottom-[-20%] left-10  ">
            <img src={tabBottom1} alt="" />
          </div>
        )}
      </div>

      {/*  */}
    </div>
  );
};

export default Hero;
