import "./App.css";
import { React } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    first_name: "init",
    last_name: "init",
    email: "init",
    password: "init",
    confirm_password: "init",
    pass_match: false,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newObject = form;

    console.log(newObject);
  };
  const onChangeHandler = (event) => {
    event.preventDefault();
    // console.log("I'm here eric")
    console.log(form.first_name);
    const newState = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newState);

    //////////// errors

    var newPassMatch = true;
    var newErrorValue = "";
    if (event.target.value.length < 5) {
      newErrorValue = event.target.name + " must be at least 5 chars";
      // console.log(`name ${event.target.name} value ${event.target.value}`);
      // console.log(`ename ${newErrorName} evalue ${newErrorValue}`);
    } else {
      newErrorValue = "";
    }
    if (event.target.name === "password") {
      console.log("in password checker");
      (event.target.value == form.confirm_password ? newPassMatch = true : newPassMatch = false);
    } else if (event.target.name === "confirm_password") {
      console.log("in confirm_password checker");
      (event.target.value == form.password ? newPassMatch = true : newPassMatch = false);
    } else {
      console.log("in somewher else");
    }
    const newStateErr = {
      ...errors,
      [event.target.name]: newErrorValue,
      passMatch: newPassMatch,
    };
    setErrors(newStateErr);
  };

  return (
    <div className="App">
      <h1>More Forms</h1>

      <form onSubmit={onSubmitHandler} className="appinner">
        <div className="item">
          <label className="label" htmlFor="first_name">
            First Name:{" "}
          </label>
          <input
            className="input"
            type="text"
            name="first_name"
            onChange={onChangeHandler}
            placeholder="First Name"
          />
        </div>
        {errors.first_name === "" || errors.first_name === "init" ? (
          ""
        ) : (
          <p className="alert-danger">{errors.first_name}</p>
        )}
        <div className="item">
          <label className="label" htmlFor="last_name">
            Last Name:
          </label>
          <input
            className="input"
            type="text"
            name="last_name"
            onChange={onChangeHandler}
            placeholder="Last Name"
          />
        </div>
        {errors.last_name === "" || errors.last_name === "init" ? (
          ""
        ) : (
          <p className="alert-danger">{errors.last_name}</p>
        )}
        <div className="item">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            className="input"
            type="text"
            name="email"
            onChange={onChangeHandler}
            placeholder="Email"
          />
        </div>
        {errors.email === "" || errors.email === "init" ? (
          ""
        ) : (
          <p className="alert-danger">{errors.email}</p>
        )}
        <div className="item">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            className="input"
            type="text"
            name="password"
            onChange={onChangeHandler}
            placeholder="Password"
          />
        </div>
        {errors.password === "" || errors.password === "init" ? (
          ""
        ) : (
          <p className="alert-danger">{errors.password}</p>
        )}
        <div className="item">
          <label className="label" htmlFor="confirm_password">
            Confirm Password:
          </label>
          <input
            className="input"
            type="text"
            name="confirm_password"
            onChange={onChangeHandler}
            placeholder="Confirm Password"
          />
        </div>
        {errors.confirm_password === "" ||
        errors.confirm_password === "init" ? (
          ""
        ) : (
          <p className="alert-danger">{errors.confirm_password}</p>
        )}
        {errors.first_name == "" &&
        errors.last_name == "" &&
        errors.email == "" ? (
          <input
            type="submit"
            className="btn btn-primary btn-lg d-block mx-auto my-2"
          />
        ) : (
          ""
        )}
        {errors.pass_match ? (
          <p></p>
        ) : (
          <p className="alert-danger">Passwords Dont' Match</p>
        )}
      </form>
      <div id="bottom">
        <div id="repeated">
          <p name="test">first_name: {form.first_name}</p>
          <p name="test">last_name: {form.last_name}</p>
          <p name="test">email: {form.email}</p>
          <p name="test">password: {form.password}</p>
          <p name="test">confirm_password: {form.confirm_password}</p>
        </div>
        <div id="repeated">
          <p name="test">error_first_name: {errors.first_name}</p>
          <p name="test">error_last_name: {errors.last_name}</p>
          <p name="test">error_email: {errors.email}</p>
          <p name="test">error_password: {errors.password}</p>
          <p name="test">error_confirm_password: {errors.confirm_password}</p>
          {errors.pass_match ? (
            <p name="test">MATCH</p>
          ) : (
            <p name="test">XXX NO MATCH XXX</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
