import ProductsList from "../Products/ProductsList";
import classes from "./Products.module.css";

import img0 from "../Products/privjesak.jpg";
import img from "../Products/jakna.jpg";

const DummyProducts = [
  {
    id: "keychain",
    name: "Key Chain",
    description:
      "Leather Motorcycle keychain Horseshoe Buckle Jewelry for Ducati 796 795 821 Monster 696 400 Diavel Multistrada Scrambler accessories",
    photo: <img src={img0} alt="keychain" />,
    price: "12.15",
  },
  {
    id: "jacket",
    name: "Jacket",
    description:
      "New Style Mens Ducati Logo Printed Jackets Windbreaker Casual Punk Zipper Bomber Jacket Motorcycle Racing Biker Jacket",
    photo: <img src={img} alt="Moto jakna" />,
    price: "125.99",
  },
];

const Products = () => {
  return (
    <div>
      <h1 className={classes.titlePr}>Products</h1>
      <div className={classes.card}>
        <ProductsList products={DummyProducts} />
      </div>
    </div>
  );
};

export default Products;
