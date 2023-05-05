import { ButtonHTMLAttributes, ReactNode } from "react"

const variants = {
  primary: 'px-4 py-3 rounded bg-functional-pure text-white',
  outline: 'bg-transparent uppercase'
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
  variant?: keyof typeof variants
}

export const Button = ({ icon, children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  return (
    <button 
      className={`flex items-center gap-2 text-sm w-fit ${variants[variant]} ${className}`}
      type="button"
      {...props}
    >
      {icon} {children}
    </button>
  )
}
