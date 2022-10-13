import React from "react";
import "./styles.css";
import ExploreCard from "./ExploreCard";
import ExploreCardImg from "./ExploreCardImg";
import ExploreCardPar from "./ExploreCardPar";
import Title from "../Title";

const Explore = () => {
  const title = "explore";
  return (
    <section className="explore-sec">
      <Title titleIs={title}/>
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
