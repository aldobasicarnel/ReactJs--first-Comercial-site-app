import classes from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h1>{props.name}</h1>
        <div className={classes.summary}>
          {props.img}
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
