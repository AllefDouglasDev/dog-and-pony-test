import { ReactNode } from "react"

type AccordionProps = {
  title: string
  description: string
  children?: ReactNode
}

const icon = "after:content-arrow-blue group-open:after:content-arrow-white"

export const Accordion = ({ title, description, children }: AccordionProps) => {
  return (
    <details className="group w-80 min-w-80 rounded-lg bg-white text-black shadow-lg">
      <summary 
        className={`items-center justify-between text-2xl p-4 rounded-lg cursor-pointer group-open:bg-base-200 group-open:text-white group-open:rounded-b-none list-none flex ${icon}`} 
      >
        <div className="flex flex-col gap-1 flex-1 w-full max-w-[260px] justify-center">
          <span className="font-bold text-2xl truncate">{title}</span>
          <span className="font-normal text-base truncate">{description}</span>
        </div>
      </summary>
      <div className="flex flex-col gap-4 p-4">
        {children}
      </div>
    </details>
  )
}
