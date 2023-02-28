import React, { useRef } from "react";
import "./_navbar.scss";
import icon from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NavBarMobile from "./navBarMobile/NavBarMobile";
import useSelectOnClick from "../../hooks/useSelectOnClick";

const NavBar: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 550px" });

  const ref1 = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLAnchorElement>(null);
  const ref4 = useRef<HTMLAnchorElement>(null);

  const refs = {
    select1: ref1,
    select2: ref2,
    select3: ref3,
    select4: ref4
  };

  const handleClick = useSelectOnClick({refs});

  return (
    <nav className="navBar">
      <div className="navBar__container">
        <Link to="/SpaceTS/">
          <img className="navBar__icon" src={icon} alt="Icon" />
        </Link>

        {isMobile ? (
          <NavBarMobile />
        ) : (
          <div className="navBar__links">
            <Link
              to="/SpaceTS/"
              className="select1"
              ref={ref1}
              onClick={(e) => handleClick(e)}
            >
              00 Home
            </Link>
            <Link
              to="/Destination/Moon"
              className="select2"
              ref={ref2}
              onClick={(e) => handleClick(e)}
            >
              01 Destination
            </Link>
            <Link
              to="/Crew/Commander"
              className="select3"
              ref={ref3}
              onClick={(e) => handleClick(e)}
            >
              02 Crew
            </Link>
            <Link
              to="/Technology/LaunchVehicle"
              className="select4"
              ref={ref4}
              onClick={(e) => handleClick(e)}
            >
              03 Technology
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
