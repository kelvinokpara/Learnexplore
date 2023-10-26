const Button = ({
  children,
  width = false,
  defButton = "def",
  icon_L,
  icon_R,
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center py-2 px-3 lg:py-4 lg:px-7 rounded-full text-xs sm:text-base lg:text-lg font-medium ${
        width ? "w-full" : ""
      } ${
        defButton === "blue"
          ? "btnGradient1 text-white"
          : defButton === "purple"
          ? "btnGradient2 text-white"
          : "border text-textColorGrey"
      }`}
    >
      {icon_L ? <img src={icon_L} alt="" className="gap-x-1" /> : ""}
      {children ?? ""}
      {icon_R ? <img src={icon_R} alt="" className="gap-x-1" /> : ""}
    </button>
  );
};

export default Button;
