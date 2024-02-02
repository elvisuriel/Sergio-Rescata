"use client"

import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Testimonials() {
    return (
        <div className="  bg-cyan-100 relative p-2 py-8 md:pt-20 " id="testimonios">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className=" text-2xl md:text-5xl mb-5 font-semibold">
                        Qué dicen los clientes de nosotros
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="self-center">
                        <p className=" rounded-lg px-4 py-4 text-primaryDark bg-gradient-to-r bg-slate-400">
                            Descubre por qué la Fundación Sergio Rescata es reconocida en la ciudad, conoce los testimonios de aquellos a quienes hemos ayudado a transformar sus vidas y superar las dificultades. Tu apoyo es fundamental para seguir haciendo una diferencia significativa en nuestra comunidad.
                        </p>
                    </div>
                </Reveal>
            </div>

            <Slide />
        </div>
    )
}
