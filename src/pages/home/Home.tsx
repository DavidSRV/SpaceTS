import React from "react";
import "./_home.scss";

const Home: React.FC = () => {
  return (
    <main className="home">
      <section className="home__description">
        <p className="home__title">SPACE</p>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className="home__button">
          <p className="home__button__description">EXPLORE</p>
      </section>
    </main>
  );
};

export default Home;
