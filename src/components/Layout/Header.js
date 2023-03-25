import React from "react";

import mealsImage from "../../assets/meals.jpg";
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img alt="meals img" src={mealsImage} />
      </div>
    </>
  );
}

export default Header;
