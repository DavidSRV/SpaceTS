import React from "react";
import "./_navbar.scss";
import icon from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NavBarMobile from "./navBarMobile/NavBarMobile";

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 550px" });

  return (
    <nav className="navBar">
      <div className="navBar__container">
        <Link to="/SpaceTS/"><img className="navBar__icon" src={icon} alt="Icon" /></Link>

        {isMobile ? (
          <NavBarMobile/>
        ) : (
          <div className="navBar__links">
            <Link to="/SpaceTS/">00 Home</Link>
            <Link to="/Destination/Moon">01 Destination</Link>
            <Link to="/Crew/Commander">02 Crew</Link>
            <Link to="/Technology/LaunchVehicle">03 Technology</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
