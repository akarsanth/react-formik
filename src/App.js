import { useState } from "react";
import "./App.css";
import { useFormik } from "formik";

import { validationScheme } from "./schemas/index";

function App() {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "",
      tosAccepted: false,
    },

    validationSchema: validationScheme,

    onSubmit: async (values, actions) => {
      setSuccess(false);
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setSuccess(true);
      actions.resetForm();

      // manually unchecking the TOS Checkbox
      document.getElementById("tosAccepted").checked = false;
    },
  });

  let {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    isSubmitting,
  } = formik;

  console.log(formik);

  // render
  return (
    <div className="form-box">
      <h2>Sign Up!</h2>

      <form onSubmit={handleSubmit}>
        {/* First Name Input Group */}
        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            className={
              touched.firstName && errors.firstName ? "input-error" : ""
            }
          />

          {touched.firstName && errors.firstName && (
            <p className="error-text">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name Input Group */}
        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            className={touched.lastName && errors.lastName ? "input-error" : ""}
          />
          {touched.lastName && errors.lastName && (
            <p className="error-text">{errors.lastName}</p>
          )}
        </div>

        {/* Email Input Group */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={touched.email && errors.email ? "input-error" : ""}
          />
          {touched.email && errors.email && (
            <p className="error-text">{errors.email}</p>
          )}
        </div>

        {/* Password Input Group */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            type="password"
            className={touched.password && errors.password ? "input-error" : ""}
          />
          {touched.password && errors.password && (
            <p className="error-text">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password Input Group */}
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            id="confirmPassword"
            type="password"
            className={
              touched.confirmPassword && errors.confirmPassword
                ? "input-error"
                : ""
            }
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}
        </div>

        {/* User Type Input Group */}
        <div className="input-group">
          <label htmlFor="userType">User Type</label>
          <select
            id="userType"
            name="userType"
            value={values.userType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.userType && errors.userType ? "input-error" : ""}
          >
            <option value="">Please select a user type</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
          </select>

          {touched.userType && errors.userType && (
            <p className="error-text">{errors.userType}</p>
          )}
        </div>

        {/* TOS Input Group */}
        <div className="input-group">
          <div className="checkbox">
            <input
              type="checkbox"
              name="tosAccepted"
              id="tosAccepted"
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                touched.tosAccepted && errors.tosAccepted ? "input-error" : ""
              }
            />
            <label htmlFor="tosAccepted">I accept the terms of service</label>
          </div>
          {touched.tosAccepted && errors.tosAccepted && (
            <p className="error-text">{errors.tosAccepted}</p>
          )}
        </div>

        <button disabled={isSubmitting} type="submit">
          Register
        </button>

        {success && <p className="success">User Registered Successfully!</p>}
      </form>
    </div>
  );
}

export default App;
