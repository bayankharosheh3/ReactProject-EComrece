import React from "react";
import "./styles.css";

const About = () => {
  const src = "./assets/images/5.png";

  return (
    <section className="about-sec">
      <h2>About Matter</h2>
      <div className="about-content">
        <img src={src} />
        <div className="about-text">
          <p className="mission">
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry change and sustainability for rural textile
            communities.
          </p>
          <p className="artisan">Artisan Employment Days Created</p>
          <span>123456</span>
          <p className="countries">Countries Involved To Date</p>
          <ul className="country">
            <li>India</li>
            <li>China</li>
            <li>Sri Lanka</li>
          </ul>
          <p class="tribes">#MatterTribe</p>
          <ul class="tribe">
            <li >12 designers</li>
            <li>12 Factories</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
