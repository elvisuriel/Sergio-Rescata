import Image from "next/image";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Definir una interfaz para el tipo de objeto en el array banners
interface Banner {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  breakpoints?: number;
}

interface CustomSliderProps {
  banners: Banner[];
  className: string;
}

export function CustomSlider({ banners, className }: CustomSliderProps) {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center py-2 md:py-8">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={1}
        className="absolute h-full w-full rounded-lg text-blue"
      >
        {banners.map(({ id, image, alt }) => (
          <SwiperSlide key={id}>
            <div className="h-full w-full ">
              <div className="relative ">
                <Image
                  src={image}
                  alt={alt}
                  className={className}
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomSlider;
