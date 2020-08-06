import React from "react";
import "./App.css";
import { Formik, Form, Field } from "formik";
import * as EmailValidator from "email-validator";
// import * as Yup from "yup";

const ValidatedLoginForm = () => {
  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
          }, 500);
        }}
        // validate using email-validator for practice only
        validate={(values) => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!EmailValidator.validate(values.email)) {
            errors.email = "Invalid email address";
          }

          const passwordRegex = /(?=.*[0-9])/;
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be atleast 8 characters long";
          } else if (!passwordRegex.test(values.password)) {
            errors.password =
              "Invalid password. Must contain atleast one number";
          }

          return errors;
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <Form>
              <label htmlFor="email" onSubmit={handleSubmit}>
                Email
              </label>
              <Field
                id="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ValidatedLoginForm;
