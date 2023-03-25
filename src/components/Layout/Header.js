import React from "react";

import HeaderCartButton from './HeaderCartButton';
import mealsImage from "../../assets/meals.jpg";
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img alt="meals img" src={mealsImage} />
      </div>
    </>
  );
}

export default Header;
