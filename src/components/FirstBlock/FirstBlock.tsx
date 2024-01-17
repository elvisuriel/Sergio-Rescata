"use client";
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";

export function FirstBlock() {
  return (
    <div className="relative p-4 md:py-20">
      <BackgroundRadialRight />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              Sergio-Rescata
              <span className="block degradedBlue bg-blueLight">
                La salud mental
              </span>
              es una prioridad
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Somos.... Cucuta que desde hace 3 años trabaja en la salud,
              intervención, acompañamiento y formación a nivel personal,
              familiar, institucional, comunitario y empresarial apoyando a los
              jóvenes y adultos a superar situaciones de adicción, vulneración
              de derechos y dependencia de sustancias. Con nuestra intervención
              planeamos y seguimos una ruta de trabajo y atención para ayudarlos
              a definir un proyecto de vida y así superar cada situación.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blueRadial"
              >
                Empieza ahora
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="my-20 flex items-center justify-center">
          <Image
            src="/assets/git.gif"
            alt="Card"
            width={350}
            height={350}
            className="h-auto w-72 md:w-full"
          />
        </MotionTransition>
      </div>
    </div>
  );
}
