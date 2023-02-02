import React, { useContext } from "react";
import { PostitionContext } from "../../context/PostitionSlice";
import { IpositionContextType } from "../../utils/models/interfaces";
import "./_viewTechnology.scss";

const ViewTechnology = (): JSX.Element => {
  let { numbers, info } = useContext(PostitionContext) as IpositionContextType;

  return (
    <>
      {info.technology
        .slice(numbers.position1, numbers.position2)
        .map((technology) => (
          <section key={technology.name} className="technology__section">
            <article className="technology__descriptions">
                <div className="technology__buttons">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                </div>

                <div className="technology__description">
                <p className="techonology__title">{technology.name}</p>
                <p className="technology__descriptionGeneral">{technology.description}</p>
                </div>
            </article>

            <article className="technology__img">
                <img src={technology.images.portrait} alt={technology.name} />
            </article>

          </section>
        ))}
    </>
  );
};

export default ViewTechnology;
