import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import StoreImg1 from "@/public/store-img1.png";
import StoreImg2 from "@/public/store-img2.png";
import payment from "@/public/payment.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-[8%] lg:px-[12%] py-10 mt-10 border-t border-gray-200">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        
        {/* Logo & About */}
        <div className="flex flex-col max-w-md">
          <Link
            href="/"
            className="text-3xl font-bold EB_Garamond text-black hover:scale-105 transition-transform duration-300"
          >
            Indo<span className="text-[var(--prim-color)]">shop</span>
          </Link>
          <p className="text-sm leading-relaxed mt-3">
            Kami <strong>Indoshop Art Market</strong>, tim kreatif yang menghadirkan karya seni
            dan kriya Indonesia dengan sentuhan modern.
          </p>
          <div className="flex flex-col gap-y-4 mt-5 text-sm">
            <p className="flex items-center hover:scale-105 transition-transform duration-300">
              <i className="bi bi-geo-alt-fill px-2 py-1 mr-2 text-white bg-[var(--prim-color)] rounded-full shadow-md"></i>
              Jl. Melati No. 789, Taman Budaya, Jakarta
            </p>
            <p className="flex items-center hover:scale-105 transition-transform duration-300">
              <i className="bi bi-telephone px-2 py-1 mr-2 text-white bg-[var(--prim-color)] rounded-full shadow-md"></i>
              +62 812 3456 78 / +62 813 9876 4012
            </p>
            <p className="flex items-center hover:scale-105 transition-transform duration-300">
              <i className="bi bi-envelope px-2 py-1 mr-2 text-white bg-[var(--prim-color)] rounded-full shadow-md"></i>
              info@indoshop-art.com
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          {/* Informasi */}
          <div className="flex flex-col">
            <h2 className="Unbounded text-xl mb-3 font-semibold">Informasi</h2>
            {["Penjual","Karya Seni","Galeri","Berjualan","Produk","Pasar"].map((item, i) => (
              <Link
                key={i}
                href="#"
                className="mb-2 hover:text-[var(--prim-color)] hover:translate-x-1 transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col">
            <h2 className="Unbounded text-xl mb-3 font-semibold">Dukungan</h2>
            {["Mitra Seniman","Pamerkan Karya","Galeri Kriya","Berjualan","Produk Kreatif","Kerajinan"].map((item, i) => (
              <Link
                key={i}
                href="#"
                className="mb-2 hover:text-[var(--prim-color)] hover:translate-x-1 transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Store Apps */}
          <div className="flex flex-col">
            <h2 className="Unbounded text-xl mb-3 font-semibold">Aplikasi</h2>
            <Image
              src={StoreImg1}
              alt="Store App 1"
              className="w-32 h-auto mb-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <Image
              src={StoreImg2}
              alt="Store App 2"
              className="w-32 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col">
            <h2 className="Unbounded text-xl mb-3 font-semibold">Pembayaran</h2>
            <Image
              src={payment}
              alt="Payment Methods"
              className="w-40 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}