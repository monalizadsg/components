import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./App.css";

class RegistrationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isError: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  };

  render() {
    return (
      <div>
        <Form className="form-container">
          <h4>Sign up</h4>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="cofirmPassword"
              id="confirmPassword"
              placeholder="Re-enter password"
            />
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
