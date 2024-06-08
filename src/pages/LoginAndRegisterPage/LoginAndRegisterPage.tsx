import React, { ReactElement } from "react";
import css from "./login.module.scss";
import { AuthFormValues } from "./type";
import { useNavigate } from "react-router-dom";

interface LoginAndRegisterPageProps {
  children: ReactElement<{ onLogin: (data: AuthFormValues) => void }>;
}

export default function LoginAndRegisterPage({
  children,
}: LoginAndRegisterPageProps): React.ReactElement {
  const navigate = useNavigate();

  const onLogin = (data: AuthFormValues) => {
    const token = Math.random().toString(36).substring(2, 15); // Generate random token
    localStorage.setItem("token", token);
    localStorage.setItem("username", data.username || "");
    localStorage.setItem("email", data.email || "");
    console.log("Authentication successful", data);
    navigate("/posts");
  };

  const childrenWithProps = React.cloneElement(children, { onLogin });

  return <div className={css.wrapper}>{childrenWithProps}</div>;
}
