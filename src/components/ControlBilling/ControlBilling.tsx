"use client"

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import Link from "next/link";

export function ControlBilling() {
    return (
        <div className="p-4 py-8 md:py-10">
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition className="flex-1 p-6 md:p-8">
                    {/* Primer video de YouTube */}
                    <div className="aspect-w-16 aspect-h-9 relative">
                        <Link href="https://www.youtube.com/watch?v=udykun1NawE" passHref>
                            <Image
                                src="/assets/youtube-thumbnail-1.jpg"
                                alt="Video 1"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md cursor-pointer"
                            />
                        </Link>
                    </div>
                </MotionTransition>
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-2xl md:text-5xl font-semibold">
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
                    <div className="aspect-w-16 aspect-h-9 relative mt-6">
                        <Link href="https://www.youtube.com/watch?v=iwOJdpvKpLc" passHref>
                            <Image
                                src="/assets/youtube-thumbnail-2.jpg"
                                alt="Video 2"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md cursor-pointer"
                            />
                        </Link>
                    </div>
                    {/* Botón para ver galería */}
                    <Reveal>
                        <Link href="/galeria" passHref>
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
