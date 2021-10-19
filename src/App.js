import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };



  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} /*siccome il bottone si trova nel Cart Component allora scriviamo una funzione 'onClose' (nome scelto da noi) che richiama quella sopra che abbiamo scritto (hideCartHandler), la quale chiude l'overlay. Poi andiamo nel Cart component per settare 'onClose' */ />}
      <Header onShowCart={showCartHandler} /*siccome il bottone si trova nell'header component  allora scriviamo una funzione 'onShowCart' (nome scelto da noi) che richiama quella sopra che abbiamo scritto (showCartHandler), la quale mostra l'overlay. Poi andiamo nell'Header component per settare 'onShowCart' */ />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
