import Titles from "./Titles";

function Services() {
  return (
    <>
      <Titles text="services" />
      <div>
        <div className="mt-[80px]">
          <div className="title">[#] web design</div>
          <p className="text-xs text-grey p-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            facere? Natus
          </p>
        </div>
        <div className="">
          <div className="title">[#] web dev</div>
          <p className="text-xs text-grey p-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            facere? Natus
          </p>
        </div>
        <div className="">
          <div className="title">[#] mobile dev</div>
          <p className="text-xs text-grey p-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            facere? Natus
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
