"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BackgroundRadialRight } from '../BackgroundRadialRight';
import { MotionTransition } from '../MotionTransition';
import { Reveal } from '../Reveal';
import Slider from '../Slider/Slider';
import { Button } from '@nextui-org/button';
import { VisitCounterAndSearchBar } from '@/components/VisitCounterAndSearchBar';

const banners = [
  {
    id: 1,
    image: '/assets/sergio-3.jpg',
    alt: 'Outware Picks',
    title: 'Outware Picks',
    description: 'Descripción de la imagen 2...',
  },
  {
    id: 2,
    image: '/assets/sergio-6.jpg',
    alt: 'Seasonal Offers',
    title: 'Seasonal Offers',
    description: 'Descripción de la imagen 2...',
  },
  {
    id: 3,
    image: '/assets/sergio-9.jpg',
    alt: 'Best for men',
    title: 'Best for men',
    description: 'Descripción de la imagen 3...',
  },
];

export function FirstBlock() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  // Función para resaltar el texto en un fragmento
  const highlightText = (text: string) => {
    const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());

    if (index !== -1 && searchTerm.length > 0) {
      return (
        <>
          {text.substring(0, index)}
          <span className="bg-yellow-200">{text.substring(index, index + searchTerm.length)}</span>
          {text.substring(index + searchTerm.length)}
        </>
      );
    }

    return text;
  };

  return (
    <div className="flex items-center justify-center relative  md:py-8">
      <BackgroundRadialRight />
      <div className="grid max-w-7xl  md:mx-auto md:grid-cols-2">
        <div className=" md:mx-8 my-4 md:my-6 ">
          <div>
            <VisitCounterAndSearchBar onSearch={handleSearch} smallScreen={true} />
          </div>
          <div className='flex items-center justify-center'>
            <Reveal>
              <h1 className="my-6 mx-2 md:mx-4 text-xl md:text-3xl font-semibold">
                <span>{highlightText('FUNDACION SERGIO RESCATA')}</span>
              </h1>
            </Reveal>
          </div>

          <div className='flex items-center justify-center'>
            <Reveal>
              <p className="mx-10 md:mx-0  text-justify max-w-full md:max-w-md  font-semibold text-lg">
                {highlightText(`
                Transformamos la vida de quienes desean retornar a la sobriedad, los ayudamos a
                recuperar sus objetivos, metas y sueños. Abordamos las áreas vitales para una
                recuperación completa: espiritual, familiar, psicológica, psiquiátrica y física. Somos una
                fundación sensible y solidaria, que a través de la experiencia personal, orientamos en el
                tratamiento de adicciones, con el mayor grado de calidad humana, técnica y científica.
                Tratamiento integral, multidisciplinario y personalizado de conductas autodestructivas.
              `)}
              </p>

              <div className="my-4 flex items-center justify-center">
                <Link href="/about">
                  <Button color="primary">Ver más</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
        <MotionTransition className="mx-10 md:my-4 flex items-center justify-center ">
          <Slider banners={banners} className=" rounded-lg my-4 h-64 md:h-96 w-full " />
        </MotionTransition>
      </div>
    </div>
  );
}
