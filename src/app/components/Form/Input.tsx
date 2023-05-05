import { InputHTMLAttributes, ReactNode, useCallback } from "react"
import { useFormContext } from "react-hook-form"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { IoMdAlert } from 'react-icons/io'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: ReactNode
}

const modifiers = {
  error: (hasError: boolean) => hasError ? 'border-danger-pure outline-danger-pure' : ''
}

export const Input = ({ name, label, required, className = '', ...props }: InputProps) => {
  const { register, formState: { errors } } = useFormContext()
  const [parent] = useAutoAnimate()

  const getMessage = useCallback(() => {
    if (!errors || !name) return
    const names = name.split('.')
    return names.reduce((acc, curr) => {
      if (!acc) return acc
      return acc[curr]
    }, errors as any)?.message
  }, [errors, name])

  const error = getMessage()

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
          className={`w-full border border-black h-10 rounded p-3 outline-functional-pure ${modifiers.error(!!error)} ${className}`}
          {...props}
          {...register(name)}
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
  )
}
