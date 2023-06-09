import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart({ onClose }) {
  const cartItems = [
    { id: "c1", name: "Sushi", amount: "2", price: 12.99 },
  ].map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <Modal onClose={onClose}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
