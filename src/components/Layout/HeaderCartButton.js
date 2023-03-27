import { React, useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import Styles from "./HeaderCartButton.module.css";

function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount
  }, 0);

  return (
    <button className={Styles.button} onClick={onClick}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
