import logo from "./logo.svg";
import "./App.css";
import AddsBar from "./components/AddsBar";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Features from "./components/Features";
import About from "./components/About";
import Explore from "./components/Explore";
import Shop from "./components/Shop";
import Videos from "./components/Videos";
import Seen from "./components/Seen";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <AddsBar />
      <div className="container">
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
    </>
  );
}

export default App;
