import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";
const Search = (CartItem) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <h4>Nchrys Shop</h4>
            {/* <img src={cart} alt="hdhhfhf" /> */}
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" name="" id="" placeholder="search here..." />
            <span>All Category</span>
          </div>
          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa_shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
