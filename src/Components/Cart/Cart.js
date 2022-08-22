import { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import Checkout from "../Checkout/Checkout";
const Cart = (props) => {
  const [isShowed, setIsShowed] = useState(false);

  const showCheckoutHandler = () => {
    setIsShowed(true);
  };
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount?.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const saveDataHandler = () => {
    console.log(`To pay: ${totalAmount}`);
  };
  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={showCheckoutHandler}>
            Order
          </button>
        )}
        {isShowed && <Checkout onSubmit={saveDataHandler} />}
      </div>
    </Modal>
  );
};

export default Cart;
