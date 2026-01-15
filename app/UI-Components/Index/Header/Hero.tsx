"use client";

import Image from "next/image";

import Hero1 from "@/public/Hero-img1.png";
import Hero2 from "@/public/Hero-img2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

export default function Hero() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="px-[8%] lg:px-[12%] py-5">
      <div className="relative p-10 px-20 Hero flex items-center gap-5">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
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
                <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[var(--prim-color)] hover:bg-gray-300 hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer">
                  Order Now <i className="bi bi-cart3 ps-3"></i>{" "}
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
                    Seni Bambu & Rotan Nusantara
                </h1>
                <p className="w-[80%] my-3">
                 Koleksi kerajinan tangan yang memadukan keindahan anyaman bambu dan rotan dengan sentuhan dekoratif khas Indonesia. Dari tas, wadah, hingga vas bunga, setiap karya menampilkan keterampilan tradisional yang diwariskan turun temurun. Detail sulaman dan ornamen alami menambah nilai estetika, menjadikan setiap produk bukan sekadar benda fungsional, melainkan representasi budaya dan keberlanjutan.
                </p>
                <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[var(--prim-color)] hover:bg-gray-300 hover:text-[var(--prim-color)] transition-all duration-300 cursor-pointer">
                  Order Now <i className="bi bi-cart3 ps-3"></i>{" "}
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
      </div>
    </div>
  );
}
