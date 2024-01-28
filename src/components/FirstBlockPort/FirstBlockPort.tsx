"use client";
import Link from "next/link";
import { Reveal } from "../Reveal";
import Slider from "../Slider/Slider";

const banners = [
  {
    id: 1,
    image: "/assets/gif-1.jpg",
    alt: "Outware Picks",
    title: "Outware Picks",
    description: "Descripción de la imagen 2...",
  },
  {
    id: 2,
    image: "/assets/drogadicto-1.jpg",
    alt: "Seasonal Offers",
    title: "Seasonal Offers",
    description: "Descripción de la imagen 2...",
  },
  {
    id: 3,
    image: "/assets/drogadicto-2.jpg",
    alt: "Best for men",
    title: "Best for men",
    description: "Descripción de la imagen 3...",
  },
];

export function FirstBlockPort() {
  return (
    <div className="relative h-[500px]">
      <div className="">
        <Slider banners={banners} className="h-[500px] w-full" />
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