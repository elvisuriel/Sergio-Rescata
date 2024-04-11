"use client";
import Link from "next/link";
import { Reveal } from "../Reveal";
import Slider from "../Slider/Slider";
import { footerSocialNetworks } from "../Footer/Footer.data";
const banners = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1712876742/sergiores-1_zvimkk.jpg",
    alt: "Outware Picks",
    title: "Outware Picks",
    description: "Descripción de la imagen 2...",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1712878982/sergiores-2_qttxav.jpg",
    alt: "Seasonal Offers",
    title: "Seasonal Offers",
    description: "Descripción de la imagen 2...",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dybws2ubw/image/upload/v1712878980/sergiores-3_dfi1wn.jpg",
    alt: "Best for men",
    title: "Best for men",
    description: "Descripción de la imagen 3...",
  },
];

export function FirstBlockPort() {
  return (
    <div className="relative md:-mt-10 mt-0">
      <div className="">
        <Slider banners={banners} className="h-[300px] md:h-[800px] w-full" />
      </div>
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <Reveal >
          <h1 className="text-2xl md:text-5xl font-semibold my-4 bg-black bg-opacity-30 rounded-2xl p-1">
            SERGIO RESCATA
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
      <Reveal>
        <div className="mx-2 mt-4 z-50 justify-center gap-5 fixed top-1/2 right-2 md:right-10 transform -translate-y-1/2 flex flex-col items-center">
          {footerSocialNetworks.map(({ id, icon, link }) => (
            <Link key={id} href={link} className=" text-lg md:text-4xl">
              {icon}
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
}