import React, { useContext } from "react";
import { PostitionContext } from "../../context/PostitionSlice";
import {
  IDestination,
  IpositionContextType,
} from "../../utils/models/interfaces";
import "./_viewDestination.scss";
import { Link } from "react-router-dom";

const ViewDestination = ({ destination }: IDestination): JSX.Element => {
  let { numbers, setNumbers } = useContext(
    PostitionContext
  ) as IpositionContextType;

  return (
    <>
      {destination
        .map((destination) => (
          <section className="section" key={destination.name}>
            <article className="section__containerImg">
              <img src={destination.images.png} alt={destination.name} />
            </article>

            <article>
              <div className="section__containerInfo">
                <div className="section__select">
                  <Link to="/Destination/Moon" className="section__button" />

                  <Link to="/Destination/Mars" className="section__button" />

                  <Link to="/Destination/Europa" className="section__button" />

                  <Link to="/Destination/Titan" className="section__button" />
                </div>

                <p className="section__name">{destination.name}</p>
                <p className="section__description">
                  {destination.description}
                </p>

                <hr className="section__line" />

                <div className="section__containerKmDays">
                  <p className="section__Km">{destination.distance}</p>
                  <p className="section__days">{destination.travel}</p>
                </div>
              </div>
            </article>
          </section>
        ))
        .slice(numbers.position1, numbers.position2)}
    </>
  );
};

export default ViewDestination;
