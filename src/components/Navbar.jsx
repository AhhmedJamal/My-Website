import MenuLink from "./MenuLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
//
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex fixed z-10 bg-[#cdcdcd52] sm:bg-[transparent]  justify-between top-3 items-center border-solid border-b pb-3 mb-6 w-[85%]">
        <a href="#" className="logo flex items-center ">
          <div className="mr-[10px]  w-[50px] text-center border-2  border-solid font-bold pt-1">
            JM
            <span
              id="r"
              className=" h-[8px] w-[8px] flex bg-primaryColor rounded-[50%] ml-1 mb-1"
            ></span>
          </div>
          <div className="name flex items-center text-[30px] font-medium ">
            J
            <span className="spans flex justify-between w-[26px] mx-[4px] mb-[2px]">
              <span className="span flex justify-between flex-col h-[22px] ">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="span flex justify-between flex-col h-[22px] ">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </span>
            M <span className="text-primaryColor ml-1">O</span>
          </div>
        </a>
        <div className="link hidden md:block ">
          <MenuLink dir="flex-row" hight="0px" />
        </div>
        <div className=" text-primaryColor bg-grey px-2 py-1 mr-2 mt-1 rounded-md  block md:hidden">
          <button onClick={() => setToggle((x) => !x)}>
            {toggle ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}
          </button>
        </div>
      </div>
      {!toggle && (
        <div className="menu bg-grey p-5 fixed w-[85%] z-10 shadow-2xl border border-primaryColor md:hidden">
          <MenuLink dir="flex-col" hight="h-[100px] " />
        </div>
      )}
    </>
  );
}

export default Navbar;
