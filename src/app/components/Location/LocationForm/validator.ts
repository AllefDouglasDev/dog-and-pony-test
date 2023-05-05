import { z } from 'zod'

export const schema = z.object({
  title: z.string().nonempty('Required.'),
  address: z.string().nonempty('Required.'),
  contact: z.object({
    fullName: z.string().nonempty('Required.'),
    email: z.string().nonempty('Required.'),
    position: z.string().nonempty('Required.'),
    phone: z.string().nonempty('Required.'),
  }),
})

export type FormProps = z.infer<typeof schema>
