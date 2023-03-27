import React from "react";

import HeaderCartButton from './HeaderCartButton';
import mealsImage from "../../assets/meals.jpg";
import styles from './Header.module.css';

function Header({onShowCart}) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img alt="meals img" src={mealsImage} />
      </div>
    </>
  );
}

export default Header;
