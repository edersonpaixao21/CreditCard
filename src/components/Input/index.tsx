import { InputHTMLAttributes } from "react";
import "./styles.css";

type InputProps = {
  labelText: string;
  type: "text" | "number" | "password";
  idRef: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  labelText,
  type,
  idRef,
  name,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="form-label" htmlFor={idRef}>
        {labelText}
      </label>

      <input
        className="form-input"
        type={type}
        name={name}
        id={idRef}
        {...props}
      />
    </div>
  );
};
