import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-grey h-[250px] py-5 flex justify-between md:items-center md:justify-between  md:flex-row flex-col  md:h[170px]">
      <div className="logo flex justify-between flex-col  w-fit px-7 h-[100px] order-2 ">
        {<Logo hidden="hidden" />}
        <address className="text-[11px] underline">
          email:
          <a href="mailto:ahhmed.jamal@gmail.com" className="text-primaryColor">
            {" "}
            @ahhmed.jamal@gmail.com
          </a>
          <br />
        </address>
      </div>
      <div className=" flex justify-between  px-8 order-4">
        <div className="social flex flex-col text-primaryColor">
          <h1 className="text-lg text-white">follow us:</h1>
          <a
            href="https://www.instagram.com/jeemy.y/"
            target="_blank"
            rel="noreferrer"
          >{`> instagram `}</a>
          <a
            href="https://www.linkedin.com/in/ahmed-jamal-4408a9229"
            target="_blank"
            rel="noreferrer"
          >{`> linkedin `}</a>
          <a href="https://github.com/AhhmedJamal" target="_blank" rel="noreferrer">{`> github`}</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
