import Titles from "./Titles";

function Projects() {
  return (
    <div id="projects" className="Projects my-[70px] ">
      <Titles text="projects" />
      <div className="github mt-[70px] bg-[black] p-10 flex flex-col items-center sm:items-stretch">
        <div>
          <span> 1- Todo </span>
          <div className="links">
            <a
              href="https://to-do-beige-ten.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" demo >"}
            </a>
            <a
              href="https://github.com/AhhmedJamal/ToDo"
              target="_blank"
              rel="noreferrer"
            >
              {" github >"}
            </a>
          </div>
        </div>
        <div>
          <span> 2- tic-tac </span>
          <div className="links">
            <a
              href="https://tic-tac-toe-game-xi-three.vercel.app/ "
              target="_blank"
              rel="noreferrer"
            >
              {" demo >"}
            </a>
            <a
              href="https://github.com/AhhmedJamal/tic-tac-toe-game"
              target="_blank"
              rel="noreferrer"
            >
              {" github >"}
            </a>
          </div>
        </div>
        <div>
          <span> 3- calender </span>
          <div className="links">
            <a
              href="https://calculator-two-eosin.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" demo >"}
            </a>
            <a
              href="https://github.com/AhhmedJamal/Calculator"
              target="_blank"
              rel="noreferrer"
            >
              {" github >"}
            </a>
          </div>
        </div>
        <div>
          <span> 4- clock </span>
          <div className="links">
            <a
              href="https://calculator-mgwo.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" demo >"}
            </a>
            <a
              href="https://github.com/AhhmedJamal/Clock"
              target="_blank"
              rel="noreferrer"
            >
              {" github >"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
