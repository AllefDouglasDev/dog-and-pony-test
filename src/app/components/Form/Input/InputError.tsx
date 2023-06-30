import { useContext } from "react";
import { InputContext } from "./InputRoot";

export const InputError = () => {
  const { error } = useContext(InputContext)
  if (!error) return null
  return <span className="text-danger-pure text-xs">{error}</span>;
}
