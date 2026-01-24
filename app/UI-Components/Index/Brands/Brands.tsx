"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";

import brand1 from "@/public/Vendors-logo1.png";
import brand2 from "@/public/Vendors-logo2-v2.png";
import brand3 from "@/public/Vendors-logo3.png";
import brand4 from "@/public/Vendors-logo4.png";
import brand5 from "@/public/Vendors-logo5.png";
import brand6 from "@/public/Vendors-logo6.png";
import brand7 from "@/public/Vendors-logo7.png";
import brand8 from "@/public/Vendors-logo8.png";
import brand9 from "@/public/Vendors-logo9.png";
import brand10 from "@/public/Vendors-logo10.png";
import brand11 from "@/public/Vendors-logo11.png";
import brand12 from "@/public/Vendors-logo12.png";

const brands = [
  brand1, brand2, brand3, brand4, brand5, brand6,
  brand7, brand8, brand9, brand10, brand11, brand12,
];

export default function Brands() {
  return (
    <div className="px-[8%] lg:px-[12%] py-12">
      <div className="bg-gradient-to-r from-[var(--prim-color)] to-white shadow-lg p-6 rounded-3xl">
        
        {/* Judul */}
        <div className="title mb-8 w-full flex justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl Unbounded font-bold tracking-tight text-gray-800">
            Shop By Brands
          </h1>
        </div>

        {/* Swiper */}
        <div className="w-full">
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            speed={1200}
            breakpoints={{
              1200: { slidesPerView: 7, spaceBetween: 24 },
              991: { slidesPerView: 5, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 16 },
              575: { slidesPerView: 3, spaceBetween: 14 },
              0:   { slidesPerView: 2, spaceBetween: 12 },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center">
                  <Image
                    src={brand}
                    alt={`Brand ${index + 1}`}
                    width={120}
                    height={120}
                    className="object-contain mx-auto cursor-pointer 
                               hover:scale-105 hover:shadow-xl 
                               transition-all duration-300 ease-in-out 
                               rounded-xl p-3 
                               w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}