'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuNavbarTop from "../lib/navigation/menuNavbarTop";

export default function NavbarTopSection() {
  const menu = MenuNavbarTop()
  const pathname = usePathname()

  return (
    <ul className="hidden sm:flex justify-center w-screen bg-purple-700 text-white mb-2">
      {menu.map((item, index) => (
        <li key={index} className={`${pathname===item.path && 'self-center font-extrabold text-warning'} self-center p-2`}>
          <Link href={item.path} className="flex flex-col items-center w-full"><span>{item.icon}</span> <span className="text-xs">{item.name}</span></Link></li>
      ))}
    </ul>
  )
}