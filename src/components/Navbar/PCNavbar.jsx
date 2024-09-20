import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const PCNavbar = () => {
  return (
    <>
      <div className="pcnav">
        <div className="pcnav3">
          <img src="/btlogo.webp" alt="Boystown-Logo" />
          <h1>
            St Antony's <br />
            Higher <br />
            Secondary <br />
            School
          </h1>
        </div>
        <div className="pcnav2">
          <Link to="/">
            <p>Home</p>
          </Link>

          <div className="navLine"></div>
          <Link to="/events">
            <p>Events</p>
          </Link>

          <div className="navLine"></div>
          <Link to="/academic-achievements">
            <p>Academic Achievements</p>
          </Link>
          <div className="navLine"></div>
          <Link to="/faculty">
            <p>Faculty</p>
          </Link>

          <div className="navLine"></div>
          <Link to="/infrastructure">
            <p>Infrastructure</p>
          </Link>

          <div className="navLine"></div>
          <Link to="/about">
          <p>About</p>
          </Link>
          <div className="navLine"></div>
<Link to="/contact">
<p>Contact Us</p>
</Link>
          
        </div>
      </div>
    </>
  );
};

export default PCNavbar;
