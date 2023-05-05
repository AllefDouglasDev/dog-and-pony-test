import { MdClose } from "react-icons/md"
import { LocationForm } from "../LocationForm"
import { FormProvider, useForm } from "react-hook-form"
import { schema, FormProps } from "../LocationForm/validator"
import { zodResolver } from '@hookform/resolvers/zod'

type NewLocationForm = {
  onCreate: (data: FormProps) => void
  onClose?: VoidFunction
}

export const NewLocationForm = ({ onClose, onCreate }: NewLocationForm) => {
  const formMethods = useForm<FormProps>({ resolver: zodResolver(schema) })

  console.log('errors', formMethods.formState.errors)

  return (
    <div className="w-80 min-w-80 flex flex-col rounded-lg shadow-lg bg-white">
      <header className="flex items-center justify-between p-4 text-black">
        <h2 className="font-bold">New Location</h2>
        <button type="button" onClick={onClose}>
          <MdClose size={20} />
        </button>
      </header>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onCreate)}>
          <LocationForm />
        </form>
      </FormProvider>
    </div>
  )
}
