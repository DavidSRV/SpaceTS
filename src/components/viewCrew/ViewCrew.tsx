import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostitionContext } from "../../context/PostitionSlice";
import { IpositionContextType } from "../../utils/models/interfaces";
import "./_ViewDestination.scss";

const ViewCrew = (): JSX.Element => {
  let { numbers, info } = useContext(PostitionContext) as IpositionContextType;

  return (
    <>
      {info.crew.slice(numbers.position1, numbers.position2).map((crew) => (
        <section className="crew" key={crew.name}>
          <article className="crew__descriptions">
            <div className="crew__container__descriptions">
              <p className="crew__title">{crew.role}</p>
              <p className="crew__name">{crew.name}</p>
              <p className="crew__description">{crew.bio}</p>
              <div className="crew__button">
                <Link to="/Crew/Commander">
                  <span className="crew__circle"></span>
                </Link>
                <Link to="/Crew/MissionSpecialist">
                  <span className="crew__circle"></span>
                </Link>
                <Link to="/Crew/Pilot">
                  <span className="crew__circle"></span>
                </Link>
                <Link to="/Crew/FlightEngineer">
                  <span className="crew__circle"></span>
                </Link>
              </div>
            </div>
          </article>
          <article className="crew__img">
            <img src={crew.images.png} alt={crew.name} />
          </article>
        </section>
      ))}
    </>
  );
};

export default ViewCrew;
