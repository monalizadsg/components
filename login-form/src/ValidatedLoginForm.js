import React, { Component } from "react";

class ValidatedLoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Enter your email"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Enter your password"
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default ValidatedLoginForm;
