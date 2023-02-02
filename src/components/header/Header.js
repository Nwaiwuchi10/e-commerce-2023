import React from "react";
import Head from "../Head/Head";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";

const Header = () => {
  return (
    <div>
      <Head />

      <Search />
      <Navbar />
    </div>
  );
};

export default Header;
