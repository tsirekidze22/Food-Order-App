import React from "react";

import walpaper from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onCartButtonClick }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>LetsEat</h1>
        <HeaderCartButton onCartButtonClick={onCartButtonClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={walpaper} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
