"use client";
import { Button } from '@nextui-org/button';

import { MotionTransition } from "@/components/MotionTransition";

export const CounterChart = () => {
    return (
        <MotionTransition className="mx-2 max-w-7xl py-4 md:mx-auto md:py-20">
            {/* ... (otros elementos del componente) */}

            <div className="my-4 flex items-center justify-center">

                <Button color="primary">Ver más</Button>

            </div>
        </MotionTransition>
    );
}