import React, { useState } from "react";
import css from "./login.module.scss";
import { AuthFormValues } from "./type";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useAuth } from "../../context/AuthContext";

interface LoginAndRegisterPageProps {
  showLoginPage?: boolean;
  onAuthentication?: () => void;
}

export default function LoginAndRegisterPage({
  showLoginPage = false,
  onAuthentication,
}: LoginAndRegisterPageProps): React.ReactElement {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoginPageVisible, setIsLoginPageVisible] = useState(showLoginPage);

  const onContextChange = () => {
    setIsLoginPageVisible((prevState) => !prevState);
  };

  const onLogin = (data: AuthFormValues) => {
    login(data);
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
