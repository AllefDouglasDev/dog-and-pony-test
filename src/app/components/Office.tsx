import { MdOutlineEdit } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Accordion } from "./Accordion"
import { Button } from './Form/Button'

type OfficeProps = {
  name: string
  location: string
  person: {
    name: string
    position: string
    email: string
    phone: string
  }
  onEdit?: VoidFunction
  onDelete?: VoidFunction
}

export const Office = ({ name, location, person, onEdit, onDelete }: OfficeProps) => {
  return (
    <Accordion title={name} description={location}>
      <div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">{person.name}</p>
          <p>{person.position}</p>
          <p className="text-functional-pure">{person.email}</p>
          <p>{person.phone}</p>
        </div>
        <div className="w-full flex items-center justify-between pt-4 mt-4 border-t border-base-200">
          <Button 
            className="text-base-200" 
            icon={<MdOutlineEdit size={20} />}
            onClick={onEdit}
          >
            edit
          </Button>
          <Button 
            className="text-red-500" 
            icon={<RiDeleteBinLine  size={20} />}
            onClick={onDelete}
          >
            delete
          </Button>
        </div>
      </div>
    </Accordion>
  )
}
