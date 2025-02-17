'use client'
import { useFormStatus } from "react-dom"
import { Button } from "@nextui-org/react"

interface formButtonProps{
    children:React.ReactNode;
}
export default function FormButton({children}:formButtonProps) {
   const {pending}= useFormStatus()
    console.log(useFormStatus())
  return (
  <Button type="submit" isLoading={pending}>
    {children}
  </Button>
  )
}
