import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { AuthPageProps } from "./type";

const LoginPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  return <AuthForm isLoginPage onLogin={onLogin} />;
};

export default LoginPage;
