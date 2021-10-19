import { useContext, useEffect, useState } from "react";

import React from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
const cartCtx = useContext(CartContext);

const { items } = cartCtx;

const numberOfCartItems = items.reduce((curNumber, item) => {
  return curNumber + item.amount;
}, 0);

const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

useEffect(() => {
  if (items.length === 0) {
    return;
  }
  setBtnIsHighlighted(true);

  const timer = setTimeout(() => {
    setBtnIsHighlighted(false);
  }, 300);

  return () => {
    clearTimeout(timer);
  };
}, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick} /*qui onClick non è un nome scelto da noi, ma una funzione di javascript. In questo caso passiamo la prop di onClick (questo si che è inventato e si riferisce al nome della funzione che abbiamo scritto nell'HeaderCartButton del file Header.js). il tutto si potrebbe fare anche con context, ma per quello c'è un altro esempio (nella cartella store, cart-context.js) */>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
