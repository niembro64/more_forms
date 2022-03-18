import "./App.css";
import { React } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [form, setForm] = useState({
    first_name: "default",
    last_name: "default",
    email: "default",
    password: "default",
    confirm_password: "default",
  });

  const onChangeHandler = (event) => {
    event.preventDefault();
    // console.log("I'm here eric")
    console.log(form.first_name);
    const newState = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newState);
  };

  const onSubmitHandler = (event) => {};

  const lengthValidator = (input, n) => {
    return input.length >= n ? true : false;
  };

  return (
    <div className="App">
      <h1>More Forms</h1>

      <form onSubmit={onSubmitHandler} className="appinner">
        <div className="item">
          <label className="label" for="first_name" >
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
        <div className="item">
          <label className="label" for="last_name">
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
        <div className="item">
          <label className="label" for="email">
            Email:
          </label>
          <input
            className="input"
            type="text"
            name="last_name"
            onChange={onChangeHandler}
            placeholder="Email"
          />
        </div>
        <div className="item">
          <label className="label" for="password">
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
        <div className="item">
          <label className="label" for="confirm_password">
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
        <input
          type="submit"
          className="btn btn-primary btn-lg d-block mx-auto my-2"
        />
      </form>
      <div id="repeated">
        <p name="test">first_name: {form.first_name}</p>
        <p name="test">last_name: {form.last_name}</p>
        <p name="test">email: {form.email}</p>
        <p name="test">password: {form.password}</p>
        <p name="test">confirm_password: {form.confirm_password}</p>
      </div>
    </div>
  );
}

export default App;
