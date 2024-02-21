"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";

export default function AuthButton() {
  const { data: session } = useSession();
  return (
    <>
      <div className="dropdown dropdown-bottom max-h-full">
        <div tabIndex={0} role="button" className="flex items-center gap-1">
          <Image
            src={session?.user?.image?? ""}
            width={50}
            height={40}
            className="rounded-full"
            alt="Picture of the author"
          />
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-slate-700 rounded-md w-52">
          <li className="text-sm">{session?.user?.name}</li>
          <li><button onClick={() => signOut()}>Sign out</button></li>
        </ul>
      </div>
    </>
  )
}