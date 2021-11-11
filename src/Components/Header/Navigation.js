import { Link, NavLink } from "react-router-dom";
function Navigation() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "pink",
            };
          }}
          className="nav-link"
          aria-current="page"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "pink",
            };
          }}
          className="nav-link"
          to="/aboutus"
        >
          About us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "pink",
            };
          }}
          className="nav-link"
          to="/contactus"
        >
          Contact Us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "pink",
            };
          }}
          className="nav-link"
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
