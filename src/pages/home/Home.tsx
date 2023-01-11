import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/Destination">
        <section className="home__button">
          <div className="home__button--hover">
            <p className="home__button__description">EXPLORE</p>
          </div>
        </section>                  
      </Link>
    </main>
  );
};

export default Home;
