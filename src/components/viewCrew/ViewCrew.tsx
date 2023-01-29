import React, { useContext } from "react";
import { PostitionContext } from "../../context/PostitionSlice";
import { IpositionContextType } from "../../utils/models/interfaces";
import "./_ViewDestination.scss"

const ViewCrew = (): JSX.Element => {
  let { numbers, info } = useContext(PostitionContext) as IpositionContextType;

  return (
    <>
      {info.crew.slice(numbers.position1, numbers.position2).map((crew) => (
        <section className="crew">
          <article className="crew__descriptions">
            <div className="crew__container__descriptions">
              <p className="crew__title">{crew.role}</p>
              <p className="crew__name">{crew.name}</p>
              <p className="crew__description">{crew.bio}</p>
              <div className="crew__button">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </article>
          <img src={crew.images.png} alt={crew.name} />
          <article className="crew__img"></article>
        </section>
      ))}
    </>
  );
};

export default ViewCrew;
