"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        {/* <Image
            src={session?.user?.image}
            width={100}
            height={100}
            alt="Picture of the author"
            /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}