"use client";
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";
import { Button } from '@nextui-org/button';
import Link from "next/link";
export function CounterData() {
  return (
    <MotionTransition className="mx-2 max-w-7xl py-4 md:mx-auto md:py-20">
      <div className=" rounded-xl px-4 bg-gradient-to-r from-cyan-500 to-blue-700 justify-between md:flex">
        {dataCounter.map(({ id, startNumber, endNumber, text }) => (
          <div key={id} className="py-5 text-2xl text-center md:text-left">
            +
            <CountUp
              start={startNumber}
              end={endNumber}
              duration={1.5}
              enableScrollSpy
            />{" "}
            <span className="">{text}</span>
          </div>
        ))}

      </div>
      <div className="my-4 flex items-center justify-center">
        <Link href="/counter">
          <Button color="primary">Ver más</Button>
        </Link>
      </div>
    </MotionTransition >
  );
}
