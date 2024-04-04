// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext, useRef } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); // <== ADD

  const navbarTogglerRef = useRef(null); // Ref for the navbar toggler button
  const navbarCollapseRef = useRef(null); // Ref for the navbar collapse div

  const getToken = () => {
    return localStorage.getItem("authToken");
  };
  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not

  const handleNavLinkClick = () => {
    // Check if the navbar is expanded
    if (window.getComputedStyle(navbarCollapseRef.current).display !== 'none') {
      // Simulate a click on the navbar toggler if the navbar is expanded
      navbarTogglerRef.current.click();
    }
  };

  return (
    // <nav>
    //   <Link to="/">
    //     <button>Home</button>
    //   </Link>

    //   {/*    UPDATE     */}
    //   {getToken() ? (
    //     <>
    //       <Link to="/cars">
    //         <button>Cars for Rent</button>
    //       </Link>
    //       <button onClick={logOutUser}>Logout</button>
    //       {/* <span>{user && user.name}</span> */}
    //     </>
    //   ) : (
    //     <>
    //       <Link to="/signup">
    //         {" "}
    //         <button>Sign Up</button>{" "}
    //       </Link>
    //       <Link to="/login">
    //         {" "}
    //         <button>Login</button>{" "}
    //       </Link>
    //     </>
    //   )}
    // </nav>

    <nav className="navbar navbar-light bg-light navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          Kivo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={navbarTogglerRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            {getToken() ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/cars" onClick={handleNavLinkClick}>
                    Cars for Rent
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/reservations' onClick={handleNavLinkClick}>
                    My Reservations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/favorites' onClick={handleNavLinkClick}>
                    My Favorites
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/profile' onClick={handleNavLinkClick}>
                    My Profile
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <button className="btn" onClick={() => { logOutUser(); handleNavLinkClick(); }}>
                    Logout            --> SE VE DIFFERENTE SI ESTA ASI
                  </button> */}
                  <Link className="nav-link" to="/" onClick={() => { logOutUser(); handleNavLinkClick(); }}>
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup" onClick={handleNavLinkClick}>
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={handleNavLinkClick}>
                    Log in
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;