import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Help() {
  return (
    <>
      <h1>Here is Help</h1>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="faq">
            Faq
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Help;
