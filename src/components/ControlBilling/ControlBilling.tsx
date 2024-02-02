"use client"

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";

export function ControlBilling() {
    return (
        <div className="p-4 py-8 md:py-10">
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition className="flex-1 p-6 md:p-8">
                    {/* Primer video de YouTube */}
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/watch?v=udykun1NawE"
                            title="YouTube Video 1"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>
                </MotionTransition>
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            Transformando vidas con <br />
                            experiencias significativas
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">
                            Descubre las conmovedoras experiencias vividas en la fundación y cómo hemos impactado positivamente en la vida de aquellos que han pasado por nuestras puertas.
                        </p>
                    </Reveal>
                    {/* Segundo video de YouTube */}
                    <div className="aspect-w-16 aspect-h-9 mt-6">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/watch?v=iwOJdpvKpLc"
                            title="YouTube Video 2"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>
                    {/* Botón para ver galería */}
                    <Reveal>
                        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">
                            Ver Galería
                        </button>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}