"use client";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { dataHeader } from "./Header.data";
import { useState } from "react";
import { MotionTransition } from "../MotionTransition/";


export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <MotionTransition>
      <nav className="px-2 md:px-10 lg:px-20 flex flex-wrap items-center justify-between w-full p-2 mx-auto md:py-4 bg-gradient-to-b from-blue-700 to-blue-300">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logosergio.jpeg"
            width="70"
            height="70"
            alt="Logo"
            className="rounded-full"
          />
        </Link>
        <RiMenu3Line
          className="block text-3xl md:hidden cursor-pointer"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />
        <div
          className={`${openMobileMenu ? "block" : "hidden"
            } w-full md:w-auto md:flex flex-col md:items-center md:justify-center`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8">
            {dataHeader.map(({ id, name, idLink }) => (
              <div
                key={id}
                className="px-4 transition-all duration-500 ease-in-out"
              >
                <Link href={idLink} className="text-lg hover:text-secondary">
                  {name}
                </Link>
              </div>
            ))}
          </div>

        </div>

      </nav>
    </MotionTransition>
  );
}
