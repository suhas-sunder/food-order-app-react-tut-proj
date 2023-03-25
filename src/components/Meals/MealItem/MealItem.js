import React from "react";
import styles from "./MealItem.module.css";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={price}>{props.price}</div>
      </div>
      <div>

      </div>
    </li>
  );
}

export default MealItem;
