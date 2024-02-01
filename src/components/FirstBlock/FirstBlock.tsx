"use client";
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import Slider from "../Slider/Slider";
import { Button } from '@nextui-org/button';
const banners = [
  {
    id: 1,
    image: "/assets/sres-3.jpeg",
    alt: "Outware Picks",
    title: "Outware Picks",
    description: "Descripción de la imagen 2...",
  },
  {
    id: 2,
    image: "/assets/sres-4.jpeg",
    alt: "Seasonal Offers",
    title: "Seasonal Offers",
    description: "Descripción de la imagen 2...",
  },
  {
    id: 3,
    image: "/assets/sres-5.jpeg",
    alt: "Best for men",
    title: "Best for men",
    description: "Descripción de la imagen 3...",
  },
];
export function FirstBlock() {
  return (
    <div className="  flex items-center justify-center relative p-4 py-8 md:py-20">
      <BackgroundRadialRight />
      <div className="grid max-w-7xl mx-auto md:grid-cols-2">
        <div className="my-2 md:my-10">
          <Reveal>
            <h1 className="text-4xl font-semibold">
              <span className="block degradedBlue bg-blueRadial">FUNDACION SERGIO RESCATA</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className=" flex items-center justify-center max-w-md mt-10 font-semibold text-xl">
              Transformamos la vida de quienes desean retornar a la sobriedad, los ayudamos a
              recuperar sus objetivos, metas y sueños. Abordamos las áreas vitales para una
              recuperación completa: espiritual, familiar, psicológica, psiquiátrica y física. Somos una
              fundación sensible y solidaria, que través de la experiencia personal, orientamos en el
              tratamiento de adicciones, con el mayor grado de calidad humana, técnica y científica.
              Tratamiento integral, multidisciplinario y personalizado de conductas autodestructivas.
            </p>
            <div className="my-4 flex items-center justify-center">
              <Link href="/about">
                <Button color="primary">Ver más</Button>
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="my-2 md:my-20 flex items-center justify-center h-96">
          <Slider banners={banners} className="h-64 md:h-96 w-full" />
        </MotionTransition>
      </div>
    </div>
  );
}
