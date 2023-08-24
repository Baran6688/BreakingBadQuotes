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


      <nav class="navbar navbar-expand-lg mb-3" data-bs-theme="light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="https://1000logos.net/wp-content/uploads/2023/04/Breaking-Bad-Logo.png" alt="Breaking Bad"
              width="auto" height="40" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/generator">
                  Generator
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/favourites">
                  Favourites
                </NavLink>
              </li>

            </ul>
            <form class="d-flex navbar-nav"  >
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
