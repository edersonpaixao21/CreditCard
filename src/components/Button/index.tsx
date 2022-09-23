import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  type: "button" | "submit";
  text: string;
  extraClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, type, extraClassName }: ButtonProps) => {
  return (
    <button
      className={`w-full border border-gray-500 bg-gray-300 py-3 rounded-lg ${extraClassName}`}
      type={type}
    >
      {text}
    </button>
  );
};
