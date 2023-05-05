import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode
}

export const Button = ({ icon, children, className = '', ...props }: ButtonProps) => {
  return (
    <button 
      className={`flex items-center gap-2 uppercase text-sm ${className}`}
      type="button"
      {...props}
    >
      {icon} {children}
    </button>
  )
}
