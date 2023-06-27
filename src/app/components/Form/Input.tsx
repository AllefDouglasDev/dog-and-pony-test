import {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
} from "react";
import { useFormContext } from "react-hook-form";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoMdAlert } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: ReactNode;
  mask?: (value: string) => string;
};

export const Input = ({
  name,
  label,
  required,
  mask,
  className = "",
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [parent] = useAutoAnimate();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (mask) {
      event.target.value = mask(event.target.value);
    }
  };

  const getMessage = useCallback(() => {
    if (!errors || !name) return;
    const names = name.split(".");
    return names.reduce((acc, curr) => {
      if (!acc) return acc;
      return acc[curr];
    }, errors as any)?.message;
  }, [errors, name]);

  const error = getMessage();

  return (
    <div ref={parent} className="flex flex-col gap-2 text-black">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <sup>*</sup>}
        </label>
      )}
      <div className="w-full relative">
        <input
          id={name}
          className={twMerge(
            clsx([
              "w-full border border-black h-10 rounded p-3 outline-functional-pure",
              !!error && "border-danger-pure outline-danger-pure",
            ]),
            className
          )}
          {...props}
          {...register(name, { onChange })}
        />
        {error && (
          <IoMdAlert
            size={20}
            className="text-danger-pure absolute right-2.5 top-1/2 -translate-y-1/2"
          />
        )}
      </div>
      {error && <span className="text-danger-pure text-xs">{error}</span>}
    </div>
  );
};
