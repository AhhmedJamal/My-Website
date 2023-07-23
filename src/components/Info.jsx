import Img from "../assets/my.jpg";
import Boxes from "./Boxes";

function Info() {
  const name = "I'M";
  return (
    <div className="flex justify-center items-center  mt-[100px]  flex-col md:flex-row md:justify-between">
      <div className=" flex flex-col items-center  ">
        <div className="text ">
          <h1>Nice To Meet You!</h1>
          <h2>
            {name}
            <span className="underline ml-3 decoration-double text-[22px] text-primaryColor ">
              AHMED JAMAl
            </span>
          </h2>
          <div className=" mt-[70px] text-2xl bg-grey text-white py-[10px] px-[25px]">
            {name} front end dev
          </div>
          <div className="mt-[160px] "></div>
        </div>
        <Boxes />
      </div>
      <div
        className="img w-[240px] mt-[150px]  grayscale  before:content-['']  
      relative  before:absolute before:bg-grey before:w-full before:h-full before:z-[-1]  before:top-4 before:left-6 "
      >
        <img src={Img} alt="Image" className=" " />
      </div>
    </div>
  );
}

export default Info;
