import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="mb-3">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
