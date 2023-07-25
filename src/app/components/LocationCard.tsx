import { MdOutlineEdit } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Accordion } from "./Accordion"
import { Button } from './Form/Button'

type LocationCardProps = {
  title: string
  address: string
  contact: {
    fullName: string
    position: string
    email: string
    phone: string
  }
  onUpdate?: VoidFunction
  onDelete?: VoidFunction
}

export const LocationCard = ({ title, address, contact, onUpdate, onDelete }: LocationCardProps) => {
  return (
    <Accordion title={title} description={address}>
      <div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold truncate">{contact.fullName}</p>
          <p className="truncate">{contact.position}</p>
          <p className="text-functional-pure truncate">{contact.email}</p>
          <p>{contact.phone}</p>
        </div>
        <div className="w-full flex items-center justify-between pt-4 mt-4 border-t border-base-200">
          <Button 
            className="text-base-200" 
            icon={<MdOutlineEdit size={20} />}
            onClick={onUpdate}
            variant="outline"
          >
            edit
          </Button>
          <Button 
            className="text-danger-pure" 
            icon={<RiDeleteBinLine  size={20} />}
            onClick={onDelete}
            variant="outline"
          >
            delete
          </Button>
        </div>
      </div>
    </Accordion>
  )
}
