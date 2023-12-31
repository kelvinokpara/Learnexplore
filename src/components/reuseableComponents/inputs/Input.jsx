const Input = ({
  type,
  useType = "auth",
  value,
  name,
  onChange,
  placeHolder,
  label,
  icon,
}) => {
  return (
    <div className="relative mt-4">
      {useType === "auth" ? (
        <div id="auth">
          <div className="relative w-full">
            <input
              type={type}
              id={type}
              onChange={onChange}
              value={value}
              name={name}
              className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-900 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor={type}
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              {label ?? "Label"}
            </label>

            {icon ? (
              <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-white py-1 px-1 text-gray-300 peer-placeholder-shown:text-white peer-focus:text-gray-300">
                {/* <img src={icon} alt="" /> */}
                {icon}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : useType === "contact" ? (
        <div id="contact">
          <label
            htmlFor={type}
            className="cursor-text select-none font-medium text-base text-gray-300 "
          >
            {label ?? "Label"}
          </label>

          <div
            id="contact-input"
            className=" block w-full rounded-lg border relative border-gray-300 bg-white focus:border-2 focus:border-slate-500 focus:outline-none focus:ring-0"
          >
            {icon ? (
              <div className="absolute left-2 top-1/2 -translate-y-1/2 py-1 px-1 text-gray-300 peer-placeholder-shown:text-white peer-focus:text-gray-300">
                {icon}
              </div>
            ) : (
              ""
            )}

            <input
              type={type}
              id={type}
              className="w-full appearance-none rounded-lg pl-9 py-3 text-sm text-gray-900 focus:border-0 focus:outline-none focus:ring-0"
              placeholder={placeHolder}
            />
          </div>
        </div>
      ) : useType === "textarea" ? (
        <div>
          <label
            htmlFor={label}
            className="cursor-text select-none font-medium text-base text-gray-300 "
          >
            {label ?? "Label"}
          </label>
          <textarea
            name=""
            id={label}
            cols="30"
            rows="10"
            className=" block w-full appearance-none rounded-lg border border-gray-300 bg-white px-2.5 pr-3 pb-2.5 pt-4 text-sm text-gray-900 focus:border-2 focus:border-slate-500 focus:outline-none focus:ring-0"
            placeholder={placeHolder}
          ></textarea>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
