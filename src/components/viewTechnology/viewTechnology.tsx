import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostitionContext } from "../../context/PostitionSlice";
import { IpositionContextType } from "../../utils/models/interfaces";
import { useMediaQuery } from "react-responsive";
import "./_viewTechnology.scss";

const ViewTechnology = (): JSX.Element => {
  let { numbers, info } = useContext(PostitionContext) as IpositionContextType;
  const isTablet = useMediaQuery({ query: "(max-width:900px)" });

  return (
    <>
      {info.technology
        .slice(numbers.position1, numbers.position2)
        .map((technology) => (
          <section key={technology.name} className="technology__section">
            <article className="technology__descriptions">
              <div className="technology__buttons">
                <Link to="/Technology/LaunchVehicle">
                  <span>1</span>
                </Link>
                <Link to="/Technology/SpacePort">
                  <span>2</span>
                </Link>
                <Link to="/Technology/SpaceCapsule">
                  <span>3</span>
                </Link>
              </div>

              <div className="technology__description">
                <p className="technology__title">{technology.name}</p>
                <p className="technology__descriptionGeneral">
                  {technology.description}
                </p>
              </div>
            </article>

            <article className="technology__img">
              <img
                src={
                  isTablet
                    ? technology.images.landscape
                    : technology.images.portrait
                }
                alt={technology.name}
              />
            </article>
          </section>
        ))}
    </>
  );
};

export default ViewTechnology;
