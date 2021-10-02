import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 10) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => { // useeffect used as we need continous rendering here.
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar); // to remove it.
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav_contents">
        <div className="left">
          <img
            className="nav_logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <span id="first">Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <i className="fas fa-search"></i>
          <span>Children</span>
          <i className="fas fa-bell"></i>
          <Link to="/profile">
            <img
              className="nav_avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
          </Link>
          <i id="lasticon" className="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
