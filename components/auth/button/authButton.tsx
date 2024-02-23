"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";

export default function AuthButton() {
  const { data: session } = useSession();
  console.log(session, '-------------')
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={session?.user?.image ?? ""}
          width={50}
          height={40}
          className="rounded-full"
          alt="Picture of the author"
        />
      </div>
      <div className="flex w-full justify-center gap-2">
        <div className="">{session?.user?.name}</div> |
        <div><button onClick={() => signOut()} className="text-purple-700">Sign out</button></div>
      </div>
    </>
  )
}