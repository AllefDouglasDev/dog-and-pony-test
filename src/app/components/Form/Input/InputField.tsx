import { ChangeEventHandler, InputHTMLAttributes, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { InputContext } from "./InputRoot";
import { useFormContext } from "react-hook-form";
import { IoMdAlert } from "react-icons/io";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  mask?: (value: string) => string;
};

export const InputField = ({ mask, className, ...props }: InputFieldProps) => {
  const { register } = useFormContext();
  const { name, error } = useContext(InputContext);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (mask) {
      event.target.value = mask(event.target.value);
    }
  }

  return (
    <div className="w-full relative">
      <input
        id={name}
        className={twMerge(
          [
            "w-full border border-black h-10 rounded p-3 outline-functional-pure",
            !!error && "border-danger-pure outline-danger-pure",
          ],
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
  );
};
