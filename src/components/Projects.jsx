import Titles from "./Titles";

function Projects() {
  return (
    <div id="projects" className="Projects my-[70px] ">
      <Titles text="projects" />
      <div className="github mt-[70px] bg-[black] p-10 flex flex-col items-center sm:items-stretch">
        <div>
          <span> 1- Todo </span>
          <div className="links">
            <a href="">{" demo >"}</a>
            <a href="">{" github >"}</a>
          </div>
        </div>
        <div>
          <span> 2- tic tac </span>
          <div className="links">
            <a href="">{" demo >"}</a>
            <a href="">{" github >"}</a>
          </div>
        </div>
        <div>
          <span> 3- calender </span>
          <div className="links">
            <a href="">{" demo >"}</a>
            <a href="">{" github >"}</a>
          </div>
        </div>
        <div>
          <span> 4- clock </span>
          <div className="links">
            <a href="">{" demo >"}</a>
            <a href="">{" github >"}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
