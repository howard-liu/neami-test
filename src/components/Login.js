import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, username: "", password: "", error: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    if (
      this.state.username === "Howard" &&
      this.state.password === "password"
    ) {
      this.setState({ error: false });
      this.setState({ loggedIn: true });
    } else {
      this.setState({ error: true });
    }

    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
    event.preventDefault();
  }

  render() {
    const loggedIn = this.state.loggedIn;
    return (
      <div>
        {loggedIn && (
          <div className="welcome">Welcome {this.state.username}</div>
        )}
        {!loggedIn && (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:{" "}
                <input
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Password:{" "}
                <input
                  type="text"
                  name="password"
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            {this.state.error && (
              <div className="red">Incorrect details, please try again</div>
            )}
            <div className="hint">
              (Correct username: "Howard", password: "password")
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
