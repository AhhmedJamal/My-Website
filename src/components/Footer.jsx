import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-grey  h-[300px] flex flex-col  justify-evenly ">
      <div className="logo  w-fit px-7 py-2">{<Logo hidden="hidden" />}</div>
      <div className=" flex justify-between px-8">
        <div className="social flex flex-col ">
          <h1 className="text-lg">follow us:</h1>
          <a href="">{`=> facebook`}</a>
          <a href="">{`=> instagram`}</a>
          <a href="">{`=> linkedin`}</a>
          <a href="">{`=> github`}</a>
        </div>
        <div className="address self-end">
          <address>
            email:{" "}
            <a href="mailto:ahhmed.jamal@gmail.com">@ahhmed.jamal@gmail.com</a>
            <br />
            phone: <span>01277478288</span>
            <br />
          </address>
        </div>
      </div>
    </div>
  );
}

export default Footer;
