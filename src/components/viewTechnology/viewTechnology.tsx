import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PostitionContext } from "../../context/PostitionSlice";
import { IpositionContextType } from "../../utils/models/interfaces";
import { useMediaQuery } from "react-responsive";
import "./_viewTechnology.scss";
import background from "../../assets/technology/background-technology-desktop.jpg";
import useSelectOnClick from "../../hooks/useSelectOnClick";

const ViewTechnology = (): JSX.Element => {
  let { numbers, info } = useContext(PostitionContext) as IpositionContextType;
  const isTablet = useMediaQuery({ query: "(max-width:900px)" });

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
  }, []);

  const ref1 = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLAnchorElement>(null);

  const refs = {
    select1: ref1,
    select2: ref2,
    select3: ref3,
  };

  const handleClick = useSelectOnClick({ refs });

  return (
    <>
      {info.technology
        .slice(numbers.position1, numbers.position2)
        .map((technology) => (
          <section key={technology.name} className="technology__section">
            <article className="technology__descriptions">
              <div className="technology__buttons">
                <Link
                  to="/Technology/LaunchVehicle"
                  ref={ref1}
                  onClick={(e) => handleClick(e)}
                  className="select1"
                >
                  <span>1</span>
                </Link>
                <Link
                  to="/Technology/SpacePort"
                  className="select2"
                  ref={ref2}
                  onClick={(e) => handleClick(e)}
                >
                  <span>2</span>
                </Link>
                <Link
                  to="/Technology/SpaceCapsule"
                  
                >
                  <span ref={ref3}
                  onClick={(e) => handleClick(e)}
                  className="select3">3</span>
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
