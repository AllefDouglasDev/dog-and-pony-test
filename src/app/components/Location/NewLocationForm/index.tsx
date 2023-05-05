import { MdClose } from "react-icons/md"
import { Input } from "../../Form/Input"
import { LocationForm } from "../LocationForm"
import { Button } from "../../Form/Button"

type NewLocationForm = {
  onClose?: VoidFunction
}

export const NewLocationForm = ({ onClose }: NewLocationForm) => {
  return (
    <div className="w-80 min-w-80 flex flex-col rounded-lg shadow-lg bg-white">
      <header className="flex items-center justify-between p-4 text-black">
        <h2 className="font-bold">New Location</h2>
        <button type="button" onClick={onClose}>
          <MdClose size={20} />
        </button>
      </header>
      <LocationForm />
    </div>
  )
}
