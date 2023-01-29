import React from "react";
import { ICrew } from "../../utils/models/interfaces";

const ViewCrew = ({ crew }: ICrew): JSX.Element => {
  return (
    <>
      {
        crew.map((crew) => (
          <section className="crew">
            <article className="crew__descriptions">
              <div className="crew__container__descriptions">
                <p className="crew__title">posadffispoifpsdfispd</p>
                <p className="crew__name">lkfdjalfjf</p>
                <p className="crew__description">lkasdfjdlfj</p>
                <div className="crew__button">lkfadsjfldj</div>
              </div>
            </article>
                <img src={crew.images.png} alt={crew.name} />
            <article className="crew__img"></article>
          </section>
        ))

    
      }
    </>
  );
};

export default ViewCrew;
