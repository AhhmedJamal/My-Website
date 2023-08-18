// eslint-disable-next-line react/prop-types
function Logo({ hidden }) {
  return (
    <a href="#" className="logo flex items-center ">
      <div className="mr-[10px]  w-[50px] text-center border-2  border-solid font-bold pt-1">
        JM
        <span
          id="r"
          className=" h-[8px] w-[8px] flex bg-primaryColor rounded-[50%] ml-1 mb-1"
        ></span>
      </div>
      <div
        className={`name flex items-center text-[30px] font-medium ${hidden} `}
      >
        J
        <span className="spans flex justify-between w-[26px] mx-[4px] mb-[3px]">
          <span className="span flex justify-between flex-col h-[21px] ">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="span flex justify-between flex-col h-[21px] ">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </span>
        M <span className="text-primaryColor ml-1">Y</span>
      </div>
    </a>
  );
}

export default Logo;
