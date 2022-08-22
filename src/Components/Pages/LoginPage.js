import { useState } from "react";
import { Route, Link } from "react-router-dom";
import classes from "./LoginPage.module.css";
const LoginPage = () => {
  const [name, setName] = useState("");
  const [reset, setReset] = useState("");
  let formIsValid = name.length >= 5;

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  const loginHandler = (event) => {
    setName(event.target.value);
    if (!formIsValid) {
      return;
    } else if (formIsValid) {
      console.log("Logged In!");
    }

    setReset();
  };
  return (
    <div className={classes.login}>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          onSubmit={formSubmitHandler}
          onChange={loginHandler}
          className={classes.input}
          placeholder="Name"
          value={name}
          reset={reset}
        ></input>
        <button className="btn--flat" onClick={loginHandler}>
          Login
        </button>
        <Route path="/login/new-user">
          {formIsValid && <h1>{`Welcome ${name}`}</h1>}
          {formIsValid && (
            <Link activeclassname={classes.home} to="/home">
              Go to Home Page
            </Link>
          )}
        </Route>
      </form>
    </div>
  );
};
export default LoginPage;
