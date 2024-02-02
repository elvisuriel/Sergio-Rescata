import Link from "next/link";
import { Reveal } from "../Reveal";

export function CtaDark() {
    return (
        <div className="px-6 my-10 md:mt-36">
            <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-gradient-to-r from-cyan-500 to-blue-700 md:px-16 md:py-12 shadow-dark rounded-3xl">
                <div className="grid items-center md:grid-cols-2">
                    <div className="my-8">
                        <Reveal>
                            <h3 className="text-3xl font-bold">
                                Únete a Sergio Rescata y transforma vidas
                            </h3>
                        </Reveal>
                        <Reveal>
                            <p>
                                Descubre cómo puedes contribuir a la recuperación y transformación
                                de personas que luchan contra la adicción. Tu apoyo marca la
                                diferencia.
                            </p>
                        </Reveal>
                    </div>

                    <Link href="/payment" className="px-4 py-3 mx-auto rounded-md bg-blueRadial">
                        <Reveal>
                            Dona ahora
                        </Reveal>
                    </Link>
                </div>
            </div>
        </div>
    );
}
