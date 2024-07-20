import { NavLink } from "react-router-dom";

const NavBarListItem = ({ icon, text, link }) => {
  return (
    <li>
      <NavLink to={link} className="navbar-list-item">
        {icon && <span className="navbar-list-item__icon">{icon}</span>}
        <span className="navbar-list-item__text">{text}</span>
      </NavLink>
    </li>
  );
};

export default NavBarListItem;
