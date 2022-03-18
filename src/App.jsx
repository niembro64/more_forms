import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>More Forms</h1>

      <form className="appinner">
        <div className="item">
          <label className="label" for="first_name">
            First Name:{" "}
          </label>
          <input className="input" type="text" name="first_name" />
        </div>
        <div className="item">
          <label className="label" for="last_name">
            Last Name:
          </label>
          <input className="input" type="text" name="last_name" />
        </div>
        <div className="item">
          <label className="label" for="email">
            Email:
          </label>
          <input className="input" type="text" name="last_name" />
        </div>
        <div className="item">
          <label className="label" for="password">
            Password:
          </label>
          <input className="input" type="text" name="password" />
        </div>
        <div className="item">
          <label className="label" for="confirm_password">
            Confirm Password:
          </label>
          <input className="input" type="text" name="confirm_password" />
        </div>
      </form>
    </div>
  );
}

export default App;
