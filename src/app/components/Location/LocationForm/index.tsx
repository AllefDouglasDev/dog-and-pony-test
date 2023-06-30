import { useFormContext } from "react-hook-form"
import { Button } from "../../Form/Button"
import { Input } from '../../Form/Input/index'
import { maskPhoneNumber } from "@/app/utils/masks"

export const LocationForm = () => {
  const { formState } = useFormContext()

  return (
    <div className="flex flex-col gap-4 p-4">
      <Input.Root name="title">
        <Input.Label required>Title</Input.Label>
        <Input.Field placeholder="Enter the title" />
        <Input.Error />
      </Input.Root>
      <Input.Root name="address">
        <Input.Label required>Enter the address</Input.Label>
        <Input.Field placeholder="Enter the address" />
        <Input.Error />
      </Input.Root>
      <div className="border-b py-4 border-functional-pure text-functional-pure uppercase text-xs">
        contact information          
      </div>
      <Input.Root name="contact.fullName">
        <Input.Label required>Full name</Input.Label>
        <Input.Field placeholder="Enter the full name" />
        <Input.Error />
      </Input.Root>
      <Input.Root name="contact.position">
        <Input.Label required>Job position</Input.Label>
        <Input.Field placeholder="Enter the job position" />
        <Input.Error />
      </Input.Root>
      <Input.Root name="contact.email">
        <Input.Label required>Email address</Input.Label>
        <Input.Field placeholder="name@example.com" />
        <Input.Error />
      </Input.Root>
      <Input.Root name="contact.phone">
        <Input.Label required>Phone</Input.Label>
        <Input.Field placeholder="(xxx) xxx-xxxx" mask={maskPhoneNumber} />
        <Input.Error />
      </Input.Root>
      <Button type="submit" disabled={!formState.isValid}>
        Save
      </Button>
    </div>
  )
}
