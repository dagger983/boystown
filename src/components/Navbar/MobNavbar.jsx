import React from "react";
import "./Navbar.css";
import { RiMenuLine } from "react-icons/ri";
import {Link} from "react-router-dom"
const MobNavbar = () => {
  return (
    <>
      <div className="mobnav">
        <div className="mobnav2">
          <img src="/btlogo.webp" alt="Boystown-Logo" />
          <h2>
            St Antony's <br />
            Higher <br />
            Secondary <br />
            School
          </h2>
        </div>
        <Link to="/menu">
        <div>
          <RiMenuLine className="menu-icon" />
        </div>
        </Link>
        
      </div>
    </>
  );
};

export default MobNavbar;
