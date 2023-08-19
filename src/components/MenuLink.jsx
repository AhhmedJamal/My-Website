// eslint-disable-next-line react/prop-types
function MenuLink({ dir, hight }) {
  return (
    <div className="list">
      <ul className={`list flex ${hight} justify-between  w-[500px] ${dir}`}>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
      </ul>
    </div>
  );
}

export default MenuLink;
