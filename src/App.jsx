import "./App.css";

function App() {
  return (
    <div className="App">
        <h1>More Forms</h1>
      <div className="appinner">
        <div className="item">
          <label for="first_name">First Name: </label>
          <input type="text" name="first_name" />
        </div>
        <div className="item">
          <label for="last_name">Last Name:</label>
          <input type="text" name="last_name" />
        </div>
        <div className="item">
          <label for="email">Email:</label>
          <input type="text" name="last_name" />
        </div>
        <div className="item">
          <label for="password">Password:</label>
          <input type="text" name="password" />
        </div>
        <div className="item">
          <label for="confirm_password">Confirm Password:</label>
          <input type="text" name="confirm_password" />
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
