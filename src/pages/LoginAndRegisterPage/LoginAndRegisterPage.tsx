import React, { useState } from "react";
import css from "./login.module.scss";
import { AuthFormValues } from "./type";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

interface LoginAndRegisterPageProps {
  showLoginPage?: boolean;
  onAuthentication?: () => void;
}

export default function LoginAndRegisterPage({
  showLoginPage = false,
  onAuthentication,
}: LoginAndRegisterPageProps): React.ReactElement {
  const navigate = useNavigate();
  const [isLoginPageVisible, setIsLoginPageVisible] = useState(showLoginPage);

  const onContextChange = () => {
    setIsLoginPageVisible((prevState) => !prevState);
  };

  const onLogin = (data: AuthFormValues) => {
    const token = Math.random().toString(36).substring(2, 15); // Generate random token
    localStorage.setItem("token", token);
    localStorage.setItem("username", data.username || "");
    localStorage.setItem("email", data.email || "");
    console.log("Authentication successful", data);
    onAuthentication ? onAuthentication() : navigate("/posts");
  };

  return (
    <div className={css.wrapper}>
      <AuthForm
        isLoginPage={isLoginPageVisible}
        onLogin={onLogin}
        onContextChange={onContextChange}
      />
    </div>
  );
}
