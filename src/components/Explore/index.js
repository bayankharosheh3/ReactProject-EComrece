import React from "react";
import "./styles.css";
import ExploreCard from "./ExploreCard";
import ExploreCardImg from "./ExploreCardImg";
import ExploreCardPar from "./ExploreCardPar";

const Explore = () => {
  return (
    <section className="explore-sec">
      <h2>Explore</h2>
      <div className="explore-content">
        <div className="explore-left">
          <ExploreCard />
        </div>
        <div className="explore-right">
          <ExploreCardImg />
          <ExploreCardPar />
          <ExploreCardPar />
          <ExploreCardImg />

        </div>
      </div>
      <button>See the journal</button>
    </section>
  );
};

export default Explore;
