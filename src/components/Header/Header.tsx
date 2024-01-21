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
      <nav className="  px-4 md:px-10  lg:px-40  flex flex-wrap items-center justify-between w-full  p-2 mx-auto md:py-8 bg-gradient-to-b from-blue-500 to-transparent">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.jpg"
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
            } w-full md:block md:w-auto`}
        >
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
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
