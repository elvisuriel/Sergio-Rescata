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
    <div className="relative mb-10">
      <div className="">
        <Slider banners={banners} className="h-[600px] w-full" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <Reveal>
          <h1 className="text-5xl font-semibold my-4">
            Sergio-Rescata
            <span className="block mt-4">AYÚDANOS A</span>
            AYUDAR
          </h1>
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-center my-8">
            <Link
              href="#clients"
              className="px-4 py-3 rounded-md bg-blueRadial"
            >
              Empieza ahora
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}