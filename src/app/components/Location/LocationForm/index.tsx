import { Button } from "../../Form/Button"
import { Input } from "../../Form/Input"

export const LocationForm = () => {
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
        name="fullName" 
        label="Full name" 
        placeholder="Enter the full name"
      />
      <Input 
        required 
        name="position" 
        label="Job Position" 
        placeholder="Enter the job position"
      />
      <Input 
        required 
        name="email" 
        label="Email address" 
        placeholder="name@example.com"
      />
      <Input 
        required 
        name="phone" 
        label="Phone" 
        placeholder="(xxx) xxx-xxxx"
      />
      <Button type="submit" form="new-form">
        Save
      </Button>
    </div>
  )
}
