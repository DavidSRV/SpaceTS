import React from "react";
import { IDestination } from "../../utils/models/interfaces";
import "./_destinations.scss";

const Destination = ({ destination }: IDestination): JSX.Element => {
  return (
    <>
      {destination
        .map((destination) => (
          <section className="section">

            <article className="section__containerImg">
              <img src={destination.images.png} alt={destination.name} />
            </article>

            <article>
              <div className="section__containerInfo">
                <div className="section__select">
                  <hr className="section__button" />
                  <hr className="section__button" />
                  <hr className="section__button" />
                  <hr className="section__button" />
                </div>

                <p className="section__name">{destination.name}</p>
                <p className="section__description">
                  {destination.description}
                </p>

                <hr />

                <div className="section__containerKmDays">
                  <p className="section__descriptionsKmDays">
                    {destination.distance}
                  </p>
                  <p className="section__days">{destination.travel}</p>
                </div>
              </div>
            </article>
          </section>
        ))
        .slice(0, 1)}
    </>
  );
};

export default Destination;
