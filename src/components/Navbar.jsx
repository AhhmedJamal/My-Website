import MenuLink from "./MenuLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from "./Logo";
//
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex fixed z-10 bg-bgNav    justify-between top-0 items-center border-solid border-b p-3 mb-6 w-[85%]">
        <Logo />
        <div className="link hidden md:block ">
          <MenuLink dir="flex-row" hight="0px" />
        </div>
        <div className=" text-primaryColor bg-grey px-2 py-1 mr-2 mt-1 rounded-md  block md:hidden">
          <button onClick={() => setToggle((x) => !x)}>
            {!toggle ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}
          </button>
        </div>
      </div>
      {toggle && (
        <div className="menu bg-grey p-5 fixed w-[85%] z-10 top-[100px] shadow-2xl border border-primaryColor md:hidden">
          <MenuLink dir="flex-col" hight="h-[150px] " />
        </div>
      )}
    </>
  );
}

export default Navbar;
