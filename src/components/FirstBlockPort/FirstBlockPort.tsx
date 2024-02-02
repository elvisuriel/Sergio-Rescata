"use client";
import Link from "next/link";
import { Reveal } from "../Reveal";
import Slider from "../Slider/Slider";

const banners = [
  {
    id: 1,
    image: "/assets/sres-6.jpeg",
    alt: "Outware Picks",
    title: "Outware Picks",
    description: "Descripción de la imagen 2...",
  },
  {
    id: 2,
    image: "/assets/sres-1.jpeg",
    alt: "Seasonal Offers",
    title: "Seasonal Offers",
    description: "Descripción de la imagen 2...",
  },
  {
    id: 3,
    image: "/assets/sres-2.jpeg",
    alt: "Best for men",
    title: "Best for men",
    description: "Descripción de la imagen 3...",
  },
];

export function FirstBlockPort() {
  return (
    <div className="relative">
      <div className="">
        <Slider banners={banners} className="h-[300px] md:h-[600px] w-full" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <Reveal>
          <h1 className="text-2xl md:text-5xl font-semibold my-4">
            Sergio-Rescata
            <span className="block mt-8">AYÚDANOS A</span>
            AYUDAR
          </h1>
        </Reveal>
        <div className="flex items-center justify-center">
          <Reveal>
            <div className="flex items-center justify-center my-8">
              <Link
                href="/payment"
                className="px-4 py-3 rounded-md bg-blueRadial"
                style={{ display: "inline-block" }}
              >
                Realizar Aporte
              </Link>
            </div>
          </Reveal>

        </div>

      </div>

    </div>
  );
}