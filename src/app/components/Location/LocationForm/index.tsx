import { useFormContext } from "react-hook-form"
import { Button } from "../../Form/Button"
import { Input } from "../../Form/Input"

export const LocationForm = () => {
  const { formState } = useFormContext()

  return (
    <div className="flex flex-col gap-4 p-4">
      <Input 
        required 
        name="title" 
        label="Title" 
        placeholder="Enter the title"
      />
      <Input 
        required 
        name="address" 
        label="Enter the address" 
        placeholder="Enter the address"
      />
      <div className="border-b py-4 border-functional-pure text-functional-pure uppercase text-xs">
        contact information          
      </div>
      <Input 
        required 
        name="contact.fullName" 
        label="Full name" 
        placeholder="Enter the full name"
      />
      <Input 
        required 
        name="contact.position" 
        label="Job Position" 
        placeholder="Enter the job position"
      />
      <Input 
        required 
        name="contact.email" 
        label="Email address" 
        placeholder="name@example.com"
      />
      <Input 
        required 
        name="contact.phone" 
        label="Phone" 
        placeholder="(xxx) xxx-xxxx"
      />
      <Button type="submit" disabled={!formState.isValid}>
        Save
      </Button>
    </div>
  )
}
