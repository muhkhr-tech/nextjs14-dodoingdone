import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavbarBottomSection from "@/components/navbarBottom";
import NavbarTopSection from "@/components/navbarTop";
import { Suspense } from "react";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Do-Doing-Done",
  description: "do doing done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className="">
          <Suspense>
            <NavbarBottomSection />
          </Suspense>
          <NavbarTopSection />
          <div className="sm:w-4/5 max-w-full mx-auto justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
