import { ButtonHTMLAttributes, ReactNode } from "react"

const variants = {
  primary: 'px-6 py-3 rounded bg-functional-pure text-white',
  outline: 'bg-transparent uppercase',
}

const modifiers = {
  disabled: (disabled: boolean) => disabled ? 'bg-base-200 text-white opacity-50 cursor-not-allowed' : '',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
  variant?: keyof typeof variants
}

export const Button = ({ icon, children, disabled, variant = 'primary', className = '', ...props }: ButtonProps) => {
  return (
    <button 
      className={`flex items-center gap-2 text-sm w-fit hover:opacity-80 ${variants[variant]} ${modifiers.disabled(!!disabled)} ${className}`}
      type="button"
      disabled={disabled}
      {...props}
    >
      {icon} {children}
    </button>
  )
}
