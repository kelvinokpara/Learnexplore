import arrowLeft from "../../../assets/Icons/arrowLeft.png";

const Back = () => {
  return (
    <div className="flex gap-[13px] font-[500]">
      <span>
        <img src={arrowLeft} />
      </span>
      <span>Back</span>
    </div>
  );
};

export default Back;
