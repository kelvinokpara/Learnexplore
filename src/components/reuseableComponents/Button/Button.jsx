const Button = ({
  children,
  width = false,
  defButton = "def",
  icon_L,
  icon_R,
  onClick,
  type
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center py-2 px-3 lg:py-2 lg:px-7 rounded-full text-xs sm:text-base lg:text-base font-medium ${
        width ? "w-full" : ""
      } ${
        defButton === "blue"
          ? "btnGradient1 text-white"
          : defButton === "purple"
          ? "btnGradient2 text-white"
          : "border text-textColorGrey"
      }`}
      onClick={onClick}
    >
      {icon_L ? <img src={icon_L} alt="" className="gap-x-1" /> : ""}
      {children ?? ""}
      {icon_R ? <img src={icon_R} alt="" className="gap-x-1" /> : ""}
      
    </button>
  );
};

export default Button;
