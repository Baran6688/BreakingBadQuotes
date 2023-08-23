import { NavLink } from "react-router-dom";
import { UseAuthContext } from "../utils/UseAuthContex";






function Navbar() {
  const { user, dispatch } = UseAuthContext()
  // console.log(user.name.toUpperCase())
  const handleClick = () => {
    dispatch({ type: "LOGOUT" })
  }
  return (
    <div className="mb-3">
      <nav className="navbar navbar-expand-lg bg-warning" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Breaking Bad
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link " to="/">
                Home
              </NavLink>
              <NavLink className="nav-link " to="/about">
                About
              </NavLink>
              <NavLink className="nav-link " to="/generator">
                Generator
              </NavLink>
              <NavLink className="nav-link " to="/favourites">
                Favourites
              </NavLink>



            </div>

          </div>
          <ul className="navbar-nav">
            {user &&
              <>
                <li className="nav-link disabled" id="textBody"> {user.name.toUpperCase()} </li>
                <li className="nav-link" onClick={handleClick}> Logout </li>
              </>}

            {!user &&
              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/signup">
                  Sing Up
                </NavLink>
              </>
            }
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
