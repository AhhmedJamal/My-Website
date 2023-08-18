import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-grey h-[220px] py-5 flex justify-between md:items-center md:justify-between  md:flex-row flex-col  md:h[170px]">
      <div className="logo flex justify-between flex-col  w-fit px-7 h-[100px] order-2 ">
        {<Logo hidden="hidden" />}
        <address>
          email:
          <a href="mailto:ahhmed.jamal@gmail.com">@ahhmed.jamal@gmail.com</a>
          <br />
        </address>
      </div>
      <div className=" flex justify-between  px-8 order-4">
        <div className="social flex flex-col text-primaryColor">
          <h1 className="text-lg text-white">follow us:</h1>
          <a href="https://www.instagram.com/jeemy.y/">{`> instagram `}</a>
          <a href="https://www.linkedin.com/in/ahmed-jamal-4408a9229">{`> linkedin `}</a>
          <a href="">{`> github`}</a>
        </div>
        <div className="address"></div>
      </div>
    </div>
  );
}

export default Footer;
