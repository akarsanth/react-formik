import * as Yup from "yup";

export const validationScheme = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is a required field.")
    .max(50, "Must be less than 50 characters"),
  lastName: Yup.string()
    .required("Last Name is a required field.")
    .max(50, "Must be less than 50 characters"),
  email: Yup.string()
    .required("Email is a required field.")
    .email("Invalid email address")
    .max(255, "Must be less than 255 characters"),

  password: Yup.string()
    // .min(8)
    .required("Password is a required field.")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
      message:
        "Should contain mininum 8 characters, a digit, a lower-case letter, and an upper-case letter",
    }),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is a required field."),

  userType: Yup.string()
    .oneOf(["Customer", "Admin"])
    .required("User Type is a required field."),

  tosAccepted: Yup.boolean().oneOf(
    [true],
    "Please accept the terms of service."
  ),
});
