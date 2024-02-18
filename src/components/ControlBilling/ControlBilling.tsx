"use client"
import React from 'react';
import Link from "next/link";
import { Reveal } from '../Reveal';
export function ControlBilling() {
    return (
        <div className="p-4 py-8 md:py-10">
            <div className="flex items-center justify-center flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <div className="flex-1 p-6 md:p-8">
                    {/* Primer video de YouTube */}
                    <div className="aspect-w-16 aspect-h-9 relative">
                        {/* Renderiza el iframe directamente sin necesidad de estado */}
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/udykun1NawE"
                            title="Video 1"
                            frameBorder="0"
                            allowFullScreen
                            className="w-full md:w-96"
                        ></iframe>
                    </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                    {/* Resto del contenido */}
                    <h2 className="text-2xl md:text-5xl font-semibold">
                        Transformando vidas con <br />
                        experiencias significativas
                    </h2>
                    <p className=" text-justify max-w-md mt-10">
                        Descubre las conmovedoras experiencias vividas en la fundación y cómo hemos impactado positivamente en la vida de aquellos que han pasado por nuestras puertas.
                    </p>

                    <Reveal>
                        <Link href="https://collection.cloudinary.com/dybws2ubw/8c560a5d20384e75f6905ea43405cb1b" passHref>
                            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                Ver Galería
                            </button>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
