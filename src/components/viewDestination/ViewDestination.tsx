import React, { useContext, useEffect, useRef } from "react";
import { PostitionContext } from "../../context/PostitionSlice";
import { IpositionContextType } from "../../utils/models/interfaces";
import "./_viewDestination.scss";
import { Link } from "react-router-dom";
import background from "../../assets/destination/background-destination-desktop.jpg";
import useSelectOnClick from "../../hooks/useSelectOnClick";

const ViewDestination = (): JSX.Element => {
  let { numbers, info } = useContext(PostitionContext) as IpositionContextType;

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
  }, []);

  const ref1 = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLAnchorElement>(null);
  const ref4 = useRef<HTMLAnchorElement>(null);

  const refs = {
    "section__button --select1": ref1,
    "section__button --select2": ref2,
    "section__button --select3": ref3,
    "section__button --select4": ref4,
  };

  const handleClick = useSelectOnClick({ refs });

  return (
    <>
      {info.destinations
        .slice(numbers.position1, numbers.position2)
        .map((destination) => (
          <section className="section__destination" key={destination.name}>
            <article className="section__containerImg">
              <img src={destination.images.png} alt={destination.name} />
            </article>

            <article>
              <div className="section__containerInfo">
                <div className="section__select">
                  <Link
                    to="/Destination/Moon"
                    className="section__button --select1"
                    onClick={(e) => handleClick(e)}
                    ref={ref1}
                  >
                    Moon
                  </Link>

                  <Link
                    to="/Destination/Mars"
                    className="section__button --select2"
                    onClick={(e) => handleClick(e)}
                    ref={ref2}

                  >
                    Mars
                  </Link>

                  <Link
                    to="/Destination/Europa"
                    className="section__button --select3"
                    onClick={(e) => handleClick(e)}
                    ref={ref3}

                  >
                    Europa
                  </Link>

                  <Link
                    to="/Destination/Titan"
                    className="section__button --select4"
                    onClick={(e) => handleClick(e)}
                    ref={ref4}

                  >
                    Titan
                  </Link>
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
        ))}
    </>
  );
};

export default ViewDestination;
