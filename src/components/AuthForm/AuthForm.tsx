import React, { useMemo } from "react";
import cx from "classnames";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import css from "./AuthForm.module.scss";
import InputComponent from "../InputComponent/InputComponent";
import { authConfig } from "./config";
import { AuthFormValues } from "../../pages/LoginAndRegisterPage/type";

interface AuthFormProps {
  onLogin?: (data: AuthFormValues) => void;
  isLoginPage?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onLogin,
  isLoginPage = false,
}) => {
  const config = useMemo(
    () => (isLoginPage ? authConfig.login : authConfig.register),
    [isLoginPage]
  );

  return (
    <Formik<AuthFormValues>
      initialValues={config.initialValues}
      validationSchema={config.validationSchema}
      onSubmit={(values) => {
        onLogin?.(values);
      }}
    >
      {(formik) => {
        return (
          <div className={css.loginContainer}>
            <div className={css.header}>
              <span className={css.title}>{config.title}</span>
              <span className={css.subtitle}>{config.subtitle}</span>
            </div>
            <form onSubmit={formik.handleSubmit} className={css.form}>
              {config.fields.map((field) => (
                <InputComponent
                  key={field.name}
                  name={field.name}
                  type={field.type || "text"}
                  label={field.label}
                  placeholder={field.placeholder}
                />
              ))}
              {isLoginPage && (
                <div className={css.forgotWrapper}>
                  <span className={cx(css.label, css.link, css.pointer)}>
                    Forgot password?
                  </span>
                  <InputComponent
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                </div>
              )}
              <button type="submit" className={cx(css.button, css.pointer)}>
                {config.btnLabel}
              </button>
            </form>
            <div className={css.text}>
              {config.footer}{" "}
              <Link to={config.footerCTALink} className={css.link}>
                {config.footerCTALabel}
              </Link>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
