import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink className="logo" to="/">
        Grace Angel
      </NavLink>

      <div className="header-right">
        <NavLink to="/">About Me</NavLink>
        <NavLink to="/experiences">Experiences</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/Skills">Skills</NavLink>
      </div>
    </header>
  );
}

export default Header;