import { Route, Switch, Redirect } from "react-router-dom";
import { Fragment, useState } from "react";
import LoginPage from "./Components/Pages/LoginPage";
import HomePage from "./Components/Pages/HomePage";
import Products from "./Components/Pages/Products";
import About from "./Components/Pages/About";
import ProductDetail from "./Components/Pages/ProductDetail";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/Cart-Provider";
import MainHeader from "./Components/MainHeader/MainHeader";
const App = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Fragment>
        <MainHeader onShowCart={showCartHandler} />
        {cartIsShown && (
          <Cart onClose={hideCartHandler} />
        )}
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/login" />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/products/:productId">
              <ProductDetail />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </Fragment>
    </CartProvider>
  );
};
export default App;
