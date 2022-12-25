import React from "react";
import "./_navbar.scss";
import icon from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="navBar">
      <div className="navBar__container">
        <img className="navBar__icon" src={icon} alt="Icon" />
        <div className="navBar__links">
          <Link to="/">Home</Link>
          <Link to="/Destination">Destination</Link>
          <Link to="/Crew">Crew</Link>
          <Link to="/Technology">Technology</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
