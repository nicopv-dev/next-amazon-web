"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image:
      "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_1280.jpg",
    title: "Refresca tu hogar",
    description: "Encuentra los mejores productos para tu hogar",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/05/15/02/07/computer-767781_1280.jpg",
    title: "Refresca tu espacio de trabajo",
    description: "Encuentra los mejores productos para tu hogar",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/08/14/07/41/shoes-1592165_1280.jpg",
    title: "Renueva tu estilo con las mejores marcas",
    description: "Encuentra el mejor calzado para ti",
  },
];

export default function HomeBanner() {
  return (
    <Swiper
      className="h-[66vh]"
      direction="vertical"
      pagination={true}
      modules={[Pagination, EffectFade, Autoplay]}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full relative">
            <Image
              src={slide.image}
              alt={slide.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-1/3 right-24 max-w-lg w-full z-10">
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-1">
                  <h3 className="text-4xl font-bold text-primary-text">
                    {slide.title}
                  </h3>
                  <p className="text-base text-primary-text">
                    {slide.description}
                  </p>
                </div>
                <button className="bg-primary py-2.5 rounded-md w-40 text-white shadow-md text-sm">
                  Leer mas
                </button>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient z-0" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
