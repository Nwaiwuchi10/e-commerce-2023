import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Data from "./mainPage/Data";
import { useState } from "react";

function App() {
  const { productItems } = Data;
  // const { shopItems } = Sdata
  const [CartItem, setCartItem] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage productItems={productItems} />} />
      </Routes>
    </>
  );
}

export default App;
