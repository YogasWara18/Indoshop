"use client"

import Image from "next/image";
import { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Category1 from "@/public/Category-1.png"
import Category2 from "@/public/Category-2.png"
import Category3 from "@/public/Category-3.png"
import Category4 from "@/public/Category-4.png"
import Category5 from "@/public/Category-5.png"
import Category6 from "@/public/Category-6.png"
import Category7 from "@/public/Category-7.png"
import Category8 from "@/public/Category-8.png"
import Category9 from "@/public/Category-9.png"
import Category10 from "@/public/Category-10.png"

type CategoryType = {
  image: StaticImageData;
  title: string;
  products: string;
};

const categories: CategoryType[] = [
  { image: Category1, title: "Patung", products: "225+ Products" },
  { image: Category2, title: "Rotan", products: "425+ Products" },
  { image: Category3, title: "Batik", products: "125+ Products" },
  { image: Category4, title: "Tenun", products: "525+ Products" },
  { image: Category5, title: "Keramik", products: "625+ Products" },
  { image: Category6, title: "Ukiran", products: "725+ Products" },
  { image: Category7, title: "Perak & emas", products: "825+ Products" },
  { image: Category8, title: "Wayang", products: "925+ Products" },
  { image: Category9, title: "Topeng", products: "1025+ Products" },
  { image: Category10, title: "Gerabah", products: "1125+ Products" },
];

export default function Category() {
  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <Swiper
  slidesPerView={8}
  spaceBetween={30} // jarak antar slide lebih besar
  loop={true}
  modules={[Autoplay]}
  autoplay={{ delay: 1500 }}
  speed={1500}
  breakpoints={{
    1200: { slidesPerView: 8 },
    991: { slidesPerView: 5 },
    767: { slidesPerView: 4 },
    575: { slidesPerView: 3 },
    0: { slidesPerView: 2 }, // biar lebih lega di layar kecil
  }}
>

        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="category-wrap flex flex-col justify-center items-center cursor-pointer">
              <div className="category-image">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="transition-all duration-300"
                />
              </div>
              <div className="category-info my-2 flex flex-col justify-center items-center">
                <h2 className="text-lg Unbounded hover:text-[var(--prim-color)] transition-all duration-300">
                  {category.title}
                </h2>
                <p className="text-gray-500">{category.products}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  )
}
