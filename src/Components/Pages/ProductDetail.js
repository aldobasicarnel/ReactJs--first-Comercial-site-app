import { Route, useParams } from "react-router-dom";
import HighlightedProducts from "../Products/HighlightedProducts";
import { useState } from "react";
import Cart from "../Cart/Cart";

const DummyProducts = [
  {
    id: "keychain",
    name: "Key Chain",
    description: "Ducati key chains, best thing for your keys.",
    price: "12.55",
    amount: 0,
  },
  {
    id: "jacket",
    name: "Jacket",
    description: "Ducati jackets made of original leather",
    price: "125.55",
    amount: 0,
  },
];

const ProductDetail = (props) => {
  const params = useParams();

  const [isShowed, setIsShowed] = useState(false);

  const showCartHandler = () => {
    setIsShowed(true);
  };

  const hideCartHandler = () => {
    setIsShowed(false);
  };

  //const match = useRouteMatch();

  const product = DummyProducts.find(
    (product) => product.id === params.productId
  );

  return (
    <div>
      {!isShowed && (
        <HighlightedProducts
          name={product.name}
          description={product.description}
          amount={product.amount}
          price={product.price}
        />
      )}
      <Route path={`/products/${params.productId}`} exact>
        <div className="centered">
          {!isShowed && (
            <button className="btn--flat" onClick={showCartHandler}>
              Checkout
            </button>
          )}

          {isShowed && <Cart onClose={hideCartHandler} />}
        </div>
      </Route>
    </div>
  );
};
/*
<Route path={`/products/${params.productId}`}>
<HighlightedProducts
  name={product.name}
  description={product.description}
  price={product.price}
/>
 <Route path={`/products/${params.productId}`}>
        <div>
          <Link to={`/products/${params.productId}/cart`}>Buy</Link>
        </div>
      </Route>
    
*/
export default ProductDetail;
