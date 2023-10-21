

const Button = ({
  children,
  bgPlain = false,
  bgBlue = true,
  iconRight,
  iconLeft,
  width = false,
}) => {
  return (
    <div>
      <button
        className={` flex justify-center items-center gap-2 px-6 py-4 sm:px-30px  rounded-full font-medium text-base ${
          bgPlain
            ? "border border-borderGrey text-buttonText"
            : bgBlue
            ? "btnGradient1 text-white"
            : "btnGradient2 text-white"
        } ${width ? "w-full" : ""}`}
      >
        <img src={iconRight ?? ""} alt="" className="h-6 " />
        {/* {text ? text : "button"} */}
        {children}
        <img src={iconLeft ?? ""} alt="" className="h-6 " />
      </button>
    </div>
  );
};

export default Button;
