import React from "react";
import FlashDeals from "../../mainPage/flashDeals/FlashDeals";
import Home from "../../mainPage/Home/Home";

const HomePage = ({ productItems }) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} />
    </>
  );
};

export default HomePage;
