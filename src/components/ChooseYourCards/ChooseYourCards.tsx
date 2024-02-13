"use client"
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";

export function ChooseYourCards() {
    return (
        <div className=" bg-blue-200 relative px-6 py-8 md:py-8" id="tarjetas">
            <BackgroundRadialRight />
            <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
                <Reveal>
                    <h2 className="my-10 text-2xl md:text-4xl font-semibold text-blue-500">
                        Contribuye con nosotros
                        <span className="block text-black ">
                            Tu aporte es la clave para cambiar vidas y construir un futuro mejor.
                        </span>
                    </h2>
                </Reveal>
                <div className="px-5">
                    <MotionTransition>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                        >
                            {dataCards.map(({ image, id }) => (
                                <SwiperSlide key={id}>
                                    <Image src={image} alt="Credit Card" width="400" height="300" className='mx-4  w-96 h-64' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </MotionTransition>
                </div>
            </div>
        </div>
    )
}
