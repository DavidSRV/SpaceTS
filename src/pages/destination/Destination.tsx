import React from "react";
import { IDestination } from "../../utils/models/interfaces";

const Destination = ({ destination }: IDestination): JSX.Element => {


  return (
    <>
      {destination.map((destination) => (
        <section>
          <article className="container__img">
            <img src={destination.images.png} alt={destination.name} />
          </article>

          <article>
            <div className="description__contaner">
              <div className="description__scroll">

              </div>

              <p className="description__name">{destination.name}</p>
              <p className="description__description">
                {destination.description}
              </p>

              <hr />

              <div className="description__section">
                <p className="description__kilometers">
                  {destination.distance}
                </p>
                <p className="dsecription__days">{destination.travel}</p>
              </div>
            </div>
          </article>
        </section>
      )).slice(0,1)}
    </>
  );
};

export default Destination;
