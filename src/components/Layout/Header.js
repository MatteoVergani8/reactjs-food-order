import React from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} /*Questo è un altro custom component, quindi bisognerà andare direttamente lì a sistemare il tutto, ma qui aggiungiao un'altra funzione 'onClick' (il nome è inventato) che riprende il props. di onShowCart che è la funzione in Header del file App.js  */ >Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']} /*Questo è un array con le quots perchè c'è il trattino nel nome della classe*/ > 
          <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
