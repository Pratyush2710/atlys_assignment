import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { AuthPageProps } from "./type";

const RegisterPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  return <AuthForm onLogin={onLogin} />;
};

export default RegisterPage;
