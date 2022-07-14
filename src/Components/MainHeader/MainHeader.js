import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header>
      <nav>
        <a href="/home" className="site-title">
          Ducati Store
        </a>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
            <NavLink activeClassName={classes.active} to="/about">
              About
            </NavLink>

            <HeaderCartButton onClick={props.onShowCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
