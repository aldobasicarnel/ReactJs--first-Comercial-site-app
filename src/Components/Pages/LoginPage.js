import { useState } from "react";
import { Route, Link } from "react-router-dom";
import classes from "./LoginPage.module.css";
const LoginPage = () => {
  const [name, setName] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const loginHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={classes.login}>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          onChange={loginHandler}
          className={classes.input}
          placeholder="Name"
          value={name}
        ></input>
        <Link to="/login/new-user">Login</Link>
        <Route path="/login/new-user">
          <h1>{`Welcome ${name}`}</h1>
          <Link activeClassName={classes.home} to="/home">
            Go to Home Page
          </Link>
        </Route>
      </form>
    </div>
  );
};
export default LoginPage;
