import { ReactNode, useContext } from "react";
import { InputContext } from "./InputRoot";

interface InputLabelProps {
  children: ReactNode;
  required?: boolean;
}

export const InputLabel = ({ required, children }: InputLabelProps) => {
  const { name } = useContext(InputContext);
  return (
    <label htmlFor={name}>
      {children}
      {required && <sup>*</sup>}
    </label>
  );
};
