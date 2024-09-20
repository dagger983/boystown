import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import "./MobMenu.css";

const MobMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to control menu visibility
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleCloseMenu = () => {
    setIsMenuOpen(false); // Close the menu
    navigate(-1); // Go back to the previous page
  };

  if (!isMenuOpen) {
    return null; // Don't render the menu if it's closed
  }

  return (
    <>
      <div className="close-icon-main">
        <div onClick={handleCloseMenu}>
          <IoCloseOutline className="close-icon" />
        </div>
      </div>

      <div className="Mobmenu">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/events">
          <p>Events</p>
        </Link>
        <Link to="/academic-achievements">
          <p>Academic Achievements</p>
        </Link>
        <Link to="/faculty">
          <p>Faculty</p>
        </Link>
        <Link to="/infrastructure">
          <p>Infrastructure</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contact">
          <p>Contact Us</p>
        </Link>
      </div>
    </>
  );
};

export default MobMenu;
