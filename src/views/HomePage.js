import React from "react";
import AddsBar from "./../components/AddsBar";
import Header from "./../components/Header";
import Slider from "./../components/Slider";
import Features from "./../components/Features";
import About from "./../components/About";
import Explore from "./../components/Explore";
import Shop from "./../components/Shop";
import Videos from "./../components/Videos";
import Seen from "./../components/Seen";
import Footer from "./../components/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="outerContainer">
        <AddsBar />
        <div className="containerH">
          <Header />
        </div>
        <Slider />
        <div className="container">
          <Features />
          <About />
          <Explore />
          <Shop />
          <Videos />
          <Seen />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
