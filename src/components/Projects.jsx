import Titles from "./Titles";

function Projects() {
  return (
    <div id="projects" className="Projects my-[70px] ">
      <Titles text="projects" />
      <div className="github mt-[70px] bg-[black] p-10">
        <div className="flex justify-between mb-2">
          <span> 1 - Todo [react js]</span>
          <a className="bg-grey p-1 rounded-md text-[12px]" href="">
            {" github >"}
          </a>
        </div>
        <div className="flex justify-between mb-2">
          <span> 2 - tic tac [react js]</span>
          <a className="bg-grey p-1 rounded-md text-[12px] " href="">
            {" github >"}
          </a>
        </div>
        <div className="flex justify-between mb-2">
          <span> 3 - calender [react js]</span>
          <a className="bg-grey p-1 rounded-md text-[12px]" href="">
            {" github >"}
          </a>
        </div>
        <div className="flex justify-between mb-2">
          <span> 4 - clock [react js]</span>
          <a className="bg-grey p-1 rounded-md text-[12px]" href="">
            {" github >"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
