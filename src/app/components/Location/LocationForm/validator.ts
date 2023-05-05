import { z } from 'zod'

export const schema = z.object({
  title: z.string().nonempty('This field cannot be empty'),
  address: z.string().nonempty('This field cannot be empty'),
  contact: z.object({
    fullName: z.string().nonempty('This field cannot be empty'),
    email: z.string().nonempty('This field cannot be empty'),
    position: z.string().nonempty('This field cannot be empty'),
    phone: z.string().nonempty('This field cannot be empty'),
  }),
})

export type FormProps = z.infer<typeof schema>
