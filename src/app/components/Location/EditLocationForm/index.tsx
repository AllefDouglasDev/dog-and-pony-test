import { MdClose } from "react-icons/md"
import { LocationForm } from "../LocationForm"
import { FormProvider, useForm } from "react-hook-form"
import { schema, FormProps } from "../LocationForm/validator"
import { zodResolver } from '@hookform/resolvers/zod'
import type { Location } from '../../../types/models'

type EditLocationForm = {
  location: Location
  onSave: (data: FormProps) => void
  onClose?: VoidFunction
}

export const EditLocationForm = ({ location, onClose, onSave }: EditLocationForm) => {
  const formMethods = useForm<FormProps>({ 
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues: location
  })

  return (
    <div className="w-80 min-w-80 flex flex-col rounded-lg shadow-lg bg-white">
      <header className="flex items-center justify-between p-4 text-black">
        <h2 className="font-bold">Edit Location</h2>
        <button type="button" onClick={onClose}>
          <MdClose size={20} />
        </button>
      </header>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSave)}>
          <LocationForm />
        </form>
      </FormProvider>
    </div>
  )
}
