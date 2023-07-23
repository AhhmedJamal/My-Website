import Titles from "./Titles";

function Skills() {
  return (
    <div id="skills" className=" mt-[130px]">
      <Titles text="skills" />
      <div
        className="skills flex justify-around items-start flex-col  mt-[70px] bg-[black]
       p-[30px] sm:flex-row sm:items-center"
      >
        <div className="w-[40%] ">
          <div className="style-lang">
            {`style languages :{`}
            <br />{" "}
            <span className="text-primaryColor">
              {` "html",`}
              <br />
              {`"css"`}
            </span>{" "}
            <br />
            {"}"}
          </div>
          <div className="css-frameworks">
            {`style framework :{`}
            <br />{" "}
            <span className="text-primaryColor">
              {`"bootstrap",`}
              <br />
              {`"tailwind",`}
              <br />
              {`"sass"`}
            </span>{" "}
            <br />
            {"}"}
          </div>
          <div className="Programming-lang">
            {`programming languages :{`}
            <br />{" "}
            <span className="text-primaryColor">
              {`"javascript",`}
              <br />
              {`"typescript",`}
            </span>{" "}
            <br />
            {"}"}
          </div>
          <div className="js-frameworks">
            {` framework :{`}
            <br />{" "}
            <span className="text-primaryColor">
              {`"react",`} <br />
              {`"jquery"`}
            </span>
            <br />
            {"}"}
          </div>
        </div>
        <div className="w-[40%] ">
          <div className="style-lang">
            {`anther skill :{`}
            <br />{" "}
            <span className="text-primaryColor">
              {`"npm",`}
              <br />
              {`"git & github",`}
              <br />
              {`"cmd",`}
              <br />
              {`"json & api"`}
            </span>{" "}
            <br />
            {"}"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
