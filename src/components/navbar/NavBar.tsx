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
          <Link to="/">00 Home</Link>
          <Link to="/Destination/Moon">01 Destination</Link>
          <Link to="/Crew">02 Crew</Link>
          <Link to="/Technology">03 Technology</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
