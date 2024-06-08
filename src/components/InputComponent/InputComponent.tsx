import React, { useState } from "react";
import cx from "classnames";
import { useFormikContext } from "formik";
import css from "./InputComponent.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputComponentProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
  name,
  label,
  placeholder,
  type = "text",
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const formik = useFormikContext<any>();
  const error = formik?.touched?.[name] && formik?.errors?.[name];

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className={css.container}>
      <label htmlFor={name} className={css.label}>
        {label}
      </label>
      <div className={css.inputContainer}>
        <input
          type={isPasswordVisible ? "text" : type}
          id={name}
          placeholder={placeholder}
          className={css.input}
          {...formik?.getFieldProps(name)}
        />
        {type === "password" && (
          <span
            className={cx(css.eyeIcon, css.passwordButton)}
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
      {error && <div className={css.error}>{error as string}</div>}
    </div>
  );
};

export default InputComponent;
