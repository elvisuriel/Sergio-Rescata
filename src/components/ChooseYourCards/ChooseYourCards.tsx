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
        <div className=" bg-emerald-200 relative px-6 py-20 md:py-20" id="tarjetas">
            <BackgroundRadialRight />
            <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl font-semibold">Elige la tarjeta o cuenta bancaria
                        <span className="block degradedBlue bg-blueLight">Tu aparte salva vidas</span>
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
                                    <Image src={image} alt="Credit Card" width="400" height="300" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </MotionTransition>
                </div>
            </div>
        </div>
    )
}
