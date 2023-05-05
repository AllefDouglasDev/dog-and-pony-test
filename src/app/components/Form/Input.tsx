import { InputHTMLAttributes, ReactNode, useCallback } from "react"
import { useFormContext } from "react-hook-form"
import { useAutoAnimate } from '@formkit/auto-animate/react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: ReactNode
}

const modifiers = {
  error: (hasError: boolean) => hasError ? 'border-red-500 outline-red-500' : ''
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
      <input 
        id={name}
        className={`border border-black h-10 rounded p-3 outline-functional-pure ${modifiers.error(!!error)} ${className}`} 
        {...props}
        {...register(name)}
      />
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  )
}
