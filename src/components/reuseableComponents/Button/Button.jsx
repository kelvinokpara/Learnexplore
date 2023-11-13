const Button = ({
  children,
  width = false,
  defButton = "def",
  icon_L,
  icon_R,
  disable,
  onClick,
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center py-2 px-3 lg:py-4 lg:px-7 rounded-full text-xs sm:text-base lg:text-lg font-medium ${
        width ? "w-full" : ""
      } ${
        defButton === "blue" && !disable
          ? "btnGradient1 text-white"
          : defButton === "purple" && !disable
          ? "btnGradient2 text-white"
          : defButton === "default" && !disable
          ? "border text-textColorGrey"
          : disable
          ? "bg-slate-400 text-white"
          : ""
      }`}
      disabled={disable ? true : false}
      onClick={onClick}
    >
      {icon_L ? <img src={icon_L} alt="" className="gap-x-1" /> : ""}
      {children ?? ""}
      {icon_R ? <img src={icon_R} alt="" className="gap-x-1" /> : ""}
    </button>
  );
};

export default Button;
