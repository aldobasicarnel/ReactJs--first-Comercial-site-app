import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

const ProductsList = (props) => {
  return (
    <div>
      <ul className={classes.list}>
        {props.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            photo={product.photo}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
