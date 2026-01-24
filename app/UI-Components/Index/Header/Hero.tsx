"use client";

import Image from "next/image";
import Hero1 from "@/public/Hero-img1.png";
import Hero2 from "@/public/Hero-img2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";



export default function Hero() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="px-[8%] lg:px-[12%] py-5">
      <div className="relative p-10 px-20 Hero flex items-center gap-5">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          onSwiper={setSwiperInstance} // simpan instance Swiper
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="EB_Garamond text-2xl lg:text-[3.6rem] font-bold">
                  Indonesian Artistry
                </h1>
                <p className="w-[80%] my-3">
                  Pesan karya seni secara online dan nikmati akses instan
                  langsung ke koleksi Anda. Lukisan, kriya, dan harta budaya
                  Indonesia unik, menginspirasi, dan kurasi terpercaya untuk
                  kebutuhan estetika sehari hari. Jelajahi kesenian dari seluruh
                  daerah di Nusantara, dari batik Jawa, ukiran Jepara, tenun
                  Sumatra, hingga patung Bali semua dengan kualitas terbaik yang
                  menghadirkan kekayaan budaya Indonesia ke ruang hidup Anda.
                </p>
                <button className=" EB_Garamond relative px-3 py-1 rounded-full font-bold text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40">
                  Order Now <i className="bi bi-cart3 ps-3"></i>
                </button>
              </div>
              <div className="hero-image w-full lg:w-1/2">
                <Image
                  src={Hero1}
                  alt="Indonesia"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="EB_Garamond text-2xl lg:text-[2.6rem] font-bold">
                  Nusantara Seni Bambu & Rotan
                </h1>
                <p className="w-[80%] my-3">
                  Koleksi kerajinan tangan yang memadukan keindahan anyaman
                  bambu dan rotan dengan sentuhan dekoratif khas Indonesia. Dari
                  tas, wadah, hingga vas bunga, setiap karya menampilkan
                  keterampilan tradisional yang diwariskan turun temurun. Detail
                  sulaman dan ornamen alami menambah nilai estetika, menjadikan
                  setiap produk bukan sekadar benda fungsional, melainkan
                  representasi budaya dan keberlanjutan.
                </p>
                <button className="EB_Garamond relative px-3 py-1 rounded-full font-bold text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40">
                  Order Now <i className="bi bi-cart3 ps-3"></i>
                </button>
              </div>
              <div className="hero-image w-full lg:w-1/2">
                <Image
                  src={Hero2}
                  alt="Kerajinan Indonesia"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Button */}
        <div
          ref={prevRef}
          className="swiper-button-prev-custom absolute left-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
          <i className="ri-arrow-left-s-line text-2xl text-gray-800"></i>
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
          <i className="ri-arrow-right-s-line text-2xl text-gray-800"></i>
        </div>
      </div>
    </div>
  );
}
