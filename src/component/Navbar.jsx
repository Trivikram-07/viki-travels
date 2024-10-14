import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import logo from './car logo.jpg';

const Navbar = () => {
  const collapseRef = useRef(null);
  const location = useLocation();

  // Close the navbar collapse when the route changes
  React.useEffect(() => {
    if (collapseRef.current) {
      const bsCollapse = new window.bootstrap.Collapse(collapseRef.current, {
        toggle: false
      });
      bsCollapse.hide();
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <a className="navbar-brand" href="/">
        <div className="logoX">
          <img src={logo} alt="Logo" />
        </div>
        Rental Service
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              to="/"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/Cars"
              activeClassName="active"
            >
              Cars
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/About"
              activeClassName="active"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/Login"
              activeClassName="active"
            >
              Login/SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
