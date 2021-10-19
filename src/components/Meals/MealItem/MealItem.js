import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2) /*toFixed(2) serve per dire che voglio 2 numeri dopo la virgola */}`

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price /* Questo è l'unico che non ha props perchè abbiamo creato una costante price (guarda sopra) che riprende il prop.price dell'array da dove stiamo prendendo i valori (AvailableMeals.js) e le mettiamo la funzione toFixed */}</div>
      </div>
      <div>
          <MealItemForm onAddToCart={addToCartHandler}>

          </MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
