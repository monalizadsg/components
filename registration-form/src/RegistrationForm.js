import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import "./App.css";

const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach((val) => {
    if (val.length > 0) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  return isValid;
};

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isError: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(this.state);
    } else {
      console.log("form is invalid!");
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "firstName":
        isError.firstName =
          value.length <= 3 ? "Atleast 3 characters required" : "";
        break;
      case "lastName":
        isError.lastName =
          value.length <= 2 ? "Atleast 2 characters required" : "";
        break;
      case "email":
        isError.email = regExp.test(value) ? "" : "Email address is invalid";
        break;
      case "password":
        isError.password =
          value.length < 6 ? "Atleast 6 characters required" : "";
        break;
      case "confirmPassword":
        isError.confirmPassword = this.state.password.match(value)
          ? ""
          : "Does not match";
        break;
      default:
        break;
    }

    this.setState({
      isError,
      [name]: value,
    });
  };

  render() {
    const { isError } = this.state;
    return (
      <div>
        <Form
          className="form-container"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <h4>Sign up</h4>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              onChange={this.handleInputChange}
              invalid={isError.firstName.length > 0}
            />
            {isError.firstName.length > 0 && (
              <FormFeedback>{isError.firstName}</FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              onChange={this.handleInputChange}
              invalid={isError.lastName.length > 0}
            />
            {isError.lastName.length > 0 && (
              <FormFeedback>{isError.lastName}</FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleInputChange}
              invalid={isError.email.length > 0}
            />
            {isError.email.length > 0 && (
              <FormFeedback>{isError.email}</FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleInputChange}
              invalid={isError.password.length > 0}
            />
            {isError.password.length > 0 && (
              <FormFeedback>{isError.password}</FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Re-enter password"
              onChange={this.handleInputChange}
              invalid={isError.confirmPassword.length > 0}
            />
            {isError.confirmPassword.length > 0 && (
              <FormFeedback>{isError.confirmPassword}</FormFeedback>
            )}
          </FormGroup>
          <Button color="primary" block>
            Sign Up
          </Button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </Form>
      </div>
    );
  }
}

export default RegistrationForm;
