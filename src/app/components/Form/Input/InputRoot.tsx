import {
  InputHTMLAttributes,
  ReactNode,
  createContext,
  useCallback,
} from "react";
import { useFormContext } from "react-hook-form";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  children: ReactNode
};

type InputContextProps = {
  name: string
  error?: string
}

export const InputContext = createContext<InputContextProps>({ name: "" });

export const InputRoot = ({ name, children }: InputProps) => {
  const { formState: { errors } } = useFormContext();
  const [parent] = useAutoAnimate();

  const getMessage = useCallback(() => {
    if (!errors || !name) return;
    const names = name.split(".");
    return names.reduce((acc, curr) => {
      if (!acc) return acc;
      return acc[curr];
    }, errors as any)?.message;
  }, [errors, name]);

  return (
    <InputContext.Provider value={{ name, error: getMessage() }}>
      <div ref={parent} className="flex flex-col gap-2 text-black">
        {children}
      </div>
    </InputContext.Provider>
  );
};
