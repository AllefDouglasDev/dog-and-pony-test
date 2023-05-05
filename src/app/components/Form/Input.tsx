import { InputHTMLAttributes, ReactNode } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: ReactNode
}

export const Input = ({ name, label, required, className = '', ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 text-black">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <sup>*</sup>}
        </label>
      )}
      <input 
        id={name}
        name={name}
        required={required}
        className={`border border-black h-10 rounded p-3 ${className}`} 
        {...props}
      />
    </div>
  )
}
