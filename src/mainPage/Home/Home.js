import React from "react";
import Categories from "../categories/Categories";
import SlideCard from "../Slider/SlideCard";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="container d_flex ">
        <div className="container d_flex">
          {/* <Categories /> */}
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Home;
