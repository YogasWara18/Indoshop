"use client";

import Image from "next/image";
import newsletter from "@/public/Hero-img1.png";

export default function Newsletter() {
  return (
    <section className="px-[8%] lg:px-[12%] py-16">
      <div
        className="newsletter-wrap bg-gradient-to-r from-red-600 to-white text-white rounded-2xl flex flex-col lg:flex-row items-center gap-10 p-10 shadow-lg transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="Unbounded text-4xl lg:text-2xl font-bold leading-tight text-shadow-outline">
            Belanja Lebih Murah, Info Promo Langsung ke Inbox!
          </h1>
          <h3 className="text-md lg:text-2xl my-6 Unbounded font-light text-shadow-outline">
            Daftar sekarang dan nikmati kabar promo terbaru setiap minggu.
          </h3>

          {/* Subscribe Form */}
          <div className="mt-7 border border-gray-300 rounded-2xl p-2 flex justify-between items-center bg-white shadow-md">
            <input
              type="email"
              className="w-full h-12 px-4 text-black outline-none rounded-l-xl"
              placeholder="Masukkan alamat email kamu..."
            />
            <button className="px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-xl  hover:bg-red-600 hover:scale-105 hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={newsletter}
            alt="Newsletter Banner"
            className="rounded-xl object-cover w-full h-auto shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
