"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";
import Image from "next/image";

export function BestBusiness() {
  return (
    <div className=" bg-blue-200 relative px-6 py-8 md:py-8  " id="features ">
      <BackgroundRadialLeft />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-2xl md:text-5xl font-semibold">
              <span className="block degradedBlue bg-blueRadial">
                Únete a la Lucha
              </span>
              juntos, podemos construir <br />
              un futuro
            </h2>
          </Reveal>
          <Reveal>
            <p className=" text-justify max-w-md mt-10">
              Las estadísticas son claras: la drogadicción en nuestra ciudad
              está en aumento. Pasamos a tener más de 5.000 habitantes según el último censo de 2021. Detrás de estas cifras, hay
              historias reales de lucha, dolor y esperanza. Nosotros estamos
              aquí para ser la voz de aquellos que necesitan ayuda y apoyo.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="/payment"
                className="px-4 py-3 rounded-md bg-blueRadial"
              >
                Realizar Aporte
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-blueRadial">
                <Image
                  src={`/assets/${icon}.png`}
                  alt={title}
                  width={40}
                  height={40}
                />
                <div className=" text-justify">
                  <h4 className="text-blue-500">{title}</h4>
                  <p className="text-black">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
