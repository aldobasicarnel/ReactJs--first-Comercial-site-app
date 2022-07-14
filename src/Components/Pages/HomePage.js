import { Link } from "react-router-dom";
import classes from "./HomePage.module.css";
import img1 from "./images1.jpg";
import Content from "../Content/Content";
import CardBanner from "../Banners/CardBanner";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <div>
        <div className={classes["main-image"]}>
          <img className={classes.homePic} src={img1} alt="Ducatti on track" />
        </div>
      </div>
      <div>
        <div>
          <Content />
        </div>
        <div className={classes.btn}>
          <Link className={classes["btn--flat"]} to="/products">
            Visit our products
          </Link>
          <div>
            <div>
              <CardBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
