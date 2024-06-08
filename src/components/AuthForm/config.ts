import { LoginSchema, RegistrationSchema } from "./helper";

export const authConfig = {
  login: {
    title: "Welcome Back",
    subtitle: "Login to your account",
    btnLabel: "Login now",
    footer: "Not registered yet?",
    footerCTALabel: "Register →",
    footerCTALink: "/auth/register",
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    fields: [
      {
        name: "email",
        label: "Email or Username",
        placeholder: "Enter your email or username",
        type: "text",
      },
    ],
  },
  register: {
    title: "Sign Up",
    subtitle: "Create an account to continue",
    btnLabel: "Continue",
    footer: "Already have an account?",
    footerCTALabel: "Login →",
    footerCTALink: "/auth/login",
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: RegistrationSchema,
    fields: [
      {
        name: "username",
        label: "Username",
        placeholder: "Enter your username",
      },
      {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Enter your email",
      },
      {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Enter your password",
      },
    ],
  },
};
