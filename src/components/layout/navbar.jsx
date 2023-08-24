import { NavLink } from "react-router-dom";
import { UseAuthContext } from "../utils/UseAuthContex";






function Navbar() {
  const { user, dispatch } = UseAuthContext()
  // console.log(user.name.toUpperCase())
  const handleClick = () => {
    dispatch({ type: "LOGOUT" })
  }
  return (
    <>


      <nav className="navbar navbar-expand-lg mb-3" data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="https://1000logos.net/wp-content/uploads/2023/04/Breaking-Bad-Logo.png" alt="Breaking Bad"
              width="auto" height="40" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/generator">
                  Generator
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/favourites">
                  Favourites
                </NavLink>

              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/posts">
                  Posts
                </NavLink>
              </li>

            </ul>
            <form className="d-flex navbar-nav"  >
              {user &&
                <>
                  <NavLink className="nav-link disabled " id="username"  > {user.name.toUpperCase()} </NavLink>
                  <button className="nav-link" onClick={handleClick} id="logout"> Logout </button>
                </>}

              {!user &&
                <>
                  <NavLink className="nav-link" id="sign" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="nav-link" id="sign" to="/signup">
                    Sing Up
                  </NavLink>
                </>
              }

            </form>
          </div>
        </div>
      </nav>











    </>
  );
}

export default Navbar;
