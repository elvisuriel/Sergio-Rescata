"use client";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import Slider from "../Slider/Slider";

const banners = [
  {
    id: 1,
    image: "/assets/gif.gif",
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
export function FirstBlock() {
  return (
    <div className=" bg-cyan-100 flex items-center justify-center relative p-4 md:py-20">
      <BackgroundRadialRight />
      <div className="grid max-w-7xl mx-auto md:grid-cols-2">
        <div className="my-20">
          <Reveal>
            <h1 className="text-4xl font-semibold">
              <span className="block degradedBlue bg-blueRadial">La salud mental</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className=" flex items-center justify-center max-w-md mt-10 font-semibold text-lg">
              Somos.... Cucuta que desde hace 3 años trabaja en la salud,
              intervención, acompañamiento y formación a nivel personal,
              familiar, institucional, comunitario y empresarial apoyando a los
              jóvenes y adultos a superar situaciones de adicción, vulneración
              de derechos y dependencia de sustancias. Con nuestra intervención
              planeamos y seguimos una ruta de trabajo y atención para ayudarlos
              a definir un proyecto de vida y así superar cada situación.
            </p>
          </Reveal>
        </div>
        <MotionTransition className="my-10 flex items-center justify-center h-96">
          <Slider banners={banners} className="h-96 w-full" />
        </MotionTransition>
      </div>
    </div>
  );
}
