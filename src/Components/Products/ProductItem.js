import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import classes from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";
const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.item}>
      <div>
        <div>
          <div className={classes.photo}>{props.photo}</div>

          <h3>{props.name}</h3>
          <div className={classes.btn}>
            <Link className={classes["btn--flat"]} to={`/products/${props.id}`}>
              View Details
            </Link>
          </div>
          <h1 className={classes.price}>${props.price}</h1>
        </div>
      </div>

      <div className={classes.description}>{props.description}</div>
      <div>
        <ProductItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
