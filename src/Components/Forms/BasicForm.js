import useInput from "./use-input";
import "./BasicForm.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.trim().includes("@");
const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSave();

    if (!formIsValid) {
      return;
    }

    console.log("SUBMITTED");
    console.log(firstNameValue, lastNameValue, emailValue);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <input
            type="text"
            placeholder="First Name"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && (
            <p className="error-text">Name is not valid!</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <input
            type="text"
            id="lname"
            placeholder="Last Name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name is not valid!</p>
          )}
        </div>
        <div className={emailClasses}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailHasError && <p className="error-text">Email is not valid!</p>}
        </div>
        <div className="form-actions">
          <button className="btn-submit" disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
