"use client";
import Link from "next/link";

import { Reveal } from "../Reveal";

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/gif-1.jpg')`,
  backgroundSize: "cover", // O ajusta según tus preferencias
  backgroundPosition: "center",
  /* Otras propiedades de fondo según tus necesidades */
};

export function FirstBlockPort() {
  return (
    <div className="relative md:py-20" style={backgroundImageStyle}>
      <div className="flex items-center justify-center max-w-5xl mx-auto ">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold  text-white my-4">
              Sergio-Rescata
              <span className="block mt-4">La salud mental</span>
              es una prioridad
            </h1>
          </Reveal>

          <Reveal>
            <div className=" flex  my-8">
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
    </div>
  );
}
