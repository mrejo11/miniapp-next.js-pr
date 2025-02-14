'use client'

import { useSession } from "next-auth/react"



export default function Profile() {
    const session=useSession()

    if(session.data?.user){
        return <div>Form client:user is signed in</div>
    }
  return (
    <div>
      Form client:user is not signIn
    </div>
  )
}
//session ot( useSession hook) return data object data object include user that user include property obj
//why is sesseion.data? because session data might be return null or return some value such as name user so remember that