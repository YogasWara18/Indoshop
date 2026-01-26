"use client";

import Image, { StaticImageData } from "next/image";

import Deal1 from "@/public/Offers-baner1.jpg";
import Deal2 from "@/public/Offers-baner2.jpg";
import Link from "next/link";

type DealItem = {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
};

const dealData: DealItem[] = [
  {
    image: Deal1,
    title: " Voucher Rp50K Off",
    description: "Keramik Bali • Pagi tiba",
  },
  {
    image: Deal2,
    title: "Gratis Ongkir",
    description: "Batik Jawa • Hari ini",
  },
];

export default function Offers() {
  return (
    <div className="px-[8%] lg:px-[12%] mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {dealData.map((deal, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl shadow-lg group ${deal.className || ""}`}
          >
            {/* Background Image */}
            <Image
              src={deal.image}
              alt={deal.title}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay tipis */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Content di tengah */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
              <h2 className="EB_Garamond font-bold text-2xl lg:text-3xl mb-2">
                {deal.title}
              </h2>
              <p className="text-sm lg:text-base opacity-90">
                {deal.description}{" "}
                <span className="text-yellow-400 font-semibold">
                  expired Jan, 26
                </span>
              </p>
              <Link href="/UI-Components/Shop">
               <button className="EB_Garamond relative px-6 py-1 rounded-full font-bold text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40">
                Shop Now 
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
