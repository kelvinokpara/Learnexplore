import { useState } from "react";
import Logo from "../assets/icons/logo.png";
import { BiSearch } from "react-icons/bi";
import { RiMenu4Fill } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { navData } from "../assets/Data/navData";
import { Link } from "react-router-dom";
import Button from "./reuseableComponents/Button/SecBtn";
const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const showToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <header className="p-4 sticky top-0 bg-white ">
        <nav className="flex  justify-between items-center m-4 mx-4 lg:mx-12 my-0">
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center">
              <img src={Logo} alt="" className="w-[25px] h-[42px]" />
              <p className="font-sansita font-bold text-[12px] md:text-[20px] lg:text-[22px]">
                LearnXplore
              </p>
            </div>
            <p className=" hidden lg:block font-inter font-medium text-[16px] text-#2f394b pl-4">
              Category
            </p>
            <div className=" hidden md:flex lg:flex bg-searchBg justify-center items-center hover:border-textHover border-2 border-borderColor rounded-2xl w-[250px]">
              <BiSearch className="text-xl" />
              <input
                type="text"
                className="p-[8px]  bg-searchBg w-10/12 font-inter  outline-none"
                placeholder="search courses or tutor"
              />
            </div>
          </div>
          <ul className=" hidden  lg:flex justify-center text-lg items-center gap-4 font-inter  text-textColor font-medium ">
            {navData.map((item) => {
              return (
                <Link key={item.id} to={item.path}>
                  <li className="hover:text-textHover" key={item.id}>
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="flex justify-center items-center mr-6 gap-4 items-center ">
            <Link to="sign-up">
              <Button
                texts="sign-in"
                bg="bg-white"
                hover="hover:bg-loginBg 
                hover:text-white
                hover:border-0"
                text="text-black text-[10px] lg:text-[18px]"
                border="border-[1px]
                 w-[50px] md:w-[65px] lg:w-[80px]"
              />
            </Link>
            <Link to="/login">
              <Button
                texts="Log in"
                bg="bg-loginBg"
                hover="hover:bg-white hover:text-black hover:border-[1px]"
                text="text-white text-[10px] lg:text-[18px]"
                w="w-[50px] md:w-[65px] lg:w-[80px]"
              />
            </Link>
          </div>
        </nav>
        <div className="absolute top-[27px] right-[10px]  lg:hidden">
          <RiMenu4Fill
            className="text-3xl cursor-pointer"
            onClick={showToggle}
          />
        </div>
      </header>
      {toggle ? (
        <div className="fixed w-screen lg:hidden h-screen bg-sidebarBg rounded top-0  right-0 duration-[950ms] z-50">
          <ul className="cursor-pointer m-6" onClick={showToggle}>
            <li className="absolute top-[20px] right-[20px]">
              <ImCancelCircle className="text-3xl text-red-500 " />
            </li>
            <li className="flex pb-4 justify-left items-center">
              <img src={Logo} alt="" />
              <p className="font-sansita text-white">LearnXplore</p>
            </li>
            <hr className="pb-4" />
            {navData.map((item) => {
              return (
                <Link key={item.id} to={item.path}>
                  <li
                    className="font-inter text-textColor rounded-lg hover:text-[#fff] w-[150px] font-bold p-4 hover:bg-sidebarHover"
                    key={item.id}
                  >
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="flex justify-center ml-8 bg-white items-center hover:border-textHover border-2 border-borderColor rounded-2xl w-[250px]">
            <BiSearch className="text-xl" />
            <input
              type="text"
              className="p-[5px]  bg-searchBg  w-10/12 font-inter  outline-none"
              placeholder="search courses or tutor"
            />
          </div>
        </div>
      ) : (
        <div className="duration-[350ms]  right-[-100%]"></div>
      )}
    </>
  );
};

export default Navigation;
