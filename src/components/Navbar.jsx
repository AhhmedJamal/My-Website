//
function Navbar() {
  return (
    <div className="flex  justify-between items-center border-solid border-b pb-3 mb-6">
      <div className="logo flex items-center ">
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
      </div>
      <div className="list">
        <ul className="list flex justify-between w-[350px] ">
          <li>
            <a href="#">info</a>
          </li>
          <li>
            <a href="#">skills</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
