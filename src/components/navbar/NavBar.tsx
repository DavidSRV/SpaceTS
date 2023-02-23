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
            <Link to="/SpaceTS/" className="select1">00 Home</Link>
            <Link to="/Destination/Moon"  className="select1">01 Destination</Link>
            <Link to="/Crew/Commander"  className="select1">02 Crew</Link>
            <Link to="/Technology/LaunchVehicle"  className="select1">03 Technology</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
