import { ButtonHTMLAttributes, ReactNode } from "react"
import { VariantProps, cva } from 'class-variance-authority'

const buttonStyles = cva(
  ['flex items-center gap-2 text-sm w-fit hover:opacity-80'], 
  {
    variants: {
      variant: {
        primary: 'px-6 py-3 rounded bg-functional-pure text-white',
        outline: 'bg-transparent uppercase',
      },
      disabled: {
        true: 'bg-base-200 text-white opacity-50 cursor-not-allowed',
      }
    },
    defaultVariants: {
      variant: 'primary',
    }
  }
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles> & {
  icon?: ReactNode
}

export const Button = ({ variant, disabled, icon, children, className = '', ...props }: ButtonProps) => {
  return (
    <button 
      className={buttonStyles({ variant, disabled, className })}
      type="button"
      disabled={disabled}
      {...props}
    >
      {icon} {children}
    </button>
  )
}
