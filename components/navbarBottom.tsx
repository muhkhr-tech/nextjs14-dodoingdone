'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import MenuNavbarBottom from "../lib/navigation/menuNavbarBottom";

export default function NavbarBottomSection() {
  const menu = MenuNavbarBottom()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  return (
    <ul className="flex sm:hidden fixed bottom-0 justify-center bg-purple-700 text-white w-screen z-10 border-t-2">
      {menu.map((item, index) => (
        <li key={index} className={`${pathname===item.path && 'self-center text-warning'} ${status===item.status && 'text-warning'} p-2`}>
          <Link href={item.path} className="flex flex-col items-center w-full"><span>{item.icon}</span> <span className="text-xs">{item.name}</span></Link></li>
      ))}
    </ul>
  )
}