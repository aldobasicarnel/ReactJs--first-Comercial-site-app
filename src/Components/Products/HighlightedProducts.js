import classes from "./HighlightedProducts.module.css";
const HighlightedProducts = (props) => {
  return (
    <figure className={classes.product}>
      <span>{props.img}</span>
      <p>{props.description}</p>
      <figcaption>{props.name}</figcaption>
      <h2>${props.price}</h2>
    </figure>
  );
};

export default HighlightedProducts;
