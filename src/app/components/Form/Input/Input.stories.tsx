import type { Meta, Story } from '@storybook/react'

import { Input } from '.'
import { FormProvider, useForm } from 'react-hook-form'

export default {
  title: 'Components/Input',
  component: Input.Root,
} as Meta<typeof Input.Root>

const Template: Story<typeof Input.Root> = () => (
  <div className="w-full h-screen bg-zinc-50">
    <FormProvider {...useForm()}>
      <Input.Root name="input">
        <Input.Label required>Label</Input.Label>
        <Input.Field />
        <Input.Error />
      </Input.Root>
    </FormProvider>
  </div>
)

export const Default = Template.bind({})
