"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";
import Image from "next/image";

export function BestBusiness() {
  return (
    <div className="relative px-6 py-20 md:py-20" id="features">
      <BackgroundRadialLeft />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">
                Únete a la Lucha
              </span>
              juntos, podemos construir <br />
              un futuro
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Las estadísticas son claras: la drogadicción en nuestra ciudad
              está en aumento. [Incluye datos relevantes sobre el uso de
              sustancias, tasas de adicción, etc.]. Detrás de estas cifras, hay
              historias reales de lucha, dolor y esperanza. Nosotros estamos
              aquí para ser la voz de aquellos que necesitan ayuda y apoyo.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blueRadial"
              >
                Únete Ahora
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                <Image
                  src={`/assets/${icon}.png`}
                  alt={title}
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="text-primary">{title}</h4>
                  <p className="text-primaryDark">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
