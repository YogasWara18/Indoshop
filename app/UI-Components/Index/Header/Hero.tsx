"use client";

import Image from "next/image";
import Link from "next/link";
import Hero1 from "@/public/Hero-img1.png";
import Hero2 from "@/public/Hero-img2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Hero() {
  return (
    <div className="px-[8%] lg:px-[12%] py-10 border-b border-[var(--prim-color)] shadow-md bg-[#fdf6ec]">
      <div className="relative Hero flex items-center gap-5">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          speed={1000} // durasi transisi antar slide (ms)
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between gap-10 
                  bg-transparent border border-[#d9c2a3] rounded-lg p-8 shadow-md"
            >
              <div className="w-full lg:w-1/2 space-y-5">
                <h1 className="Unbounded text-3xl lg:text-6xl text-[var(--prim-color)] font-bold">
                  Indonesian Artistry
                </h1>
                <Link
                  href="/UI-Components/Shop"
                  className="EB_Garamond w-full lg:w-auto px-6 py-3 mt-3 font-semibold 
                   text-white text-[var(--white-color)] bg-[var(--prim-color)] 
                   shadow-[0_0_15px_var(--prim-light)] 
                   hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] 
                   hover:shadow-[0_0_25px_var(--prim-light)] 
                   transition-all duration-[var(--transition-regular)] 
                   cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 
                   text-sm rounded-md flex items-center justify-center gap-2"
                >
                  <i className="bi bi-cart3"></i> Order Now
                </Link>
              </div>
              <div className="hero-image w-full lg:w-1/2 flex justify-center items-center overflow-hidden rounded-lg">
                <Image
                  src={Hero1}
                  alt="Indonesia"
                  className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between gap-10 
                  bg-transparent border border-[#d9c2a3] rounded-lg p-8 shadow-md"
            >
              <div className="w-full lg:w-1/2 space-y-5">
                <h1 className="Unbounded text-3xl lg:text-6xl text-[var(--prim-color)] font-bold">
                  Indonesia Art Market
                </h1>
                <Link
                  href="/UI-Components/Shop"
                  className="EB_Garamond w-full lg:w-auto px-6 py-3 mt-3 font-semibold 
                   text-white text-[var(--white-color)] bg-[var(--prim-color)] 
                   shadow-[0_0_15px_var(--prim-light)] 
                   hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] 
                   hover:shadow-[0_0_25px_var(--prim-light)] 
                   transition-all duration-[var(--transition-regular)] 
                   cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 
                   text-sm rounded-md flex items-center justify-center gap-2"
                >
                  <i className="bi bi-cart3"></i> Order Now
                </Link>
              </div>
              <div className="hero-image w-full lg:w-1/2 flex justify-center items-center overflow-hidden rounded-lg">
                <Image
                  src={Hero2}
                  alt="Indonesia"
                  className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
