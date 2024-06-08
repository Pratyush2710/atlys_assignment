import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .test("email", "Invalid email or username format", (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
      if (!value) return;
      return emailRegex.test(value) || usernameRegex.test(value);
    })
    .required("Email or username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

export const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z0-9_]{3,20}$/,
      "Username must contain only letters, numbers, and underscores"
    )
    .required("Username is required"),
  email: Yup.string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});
