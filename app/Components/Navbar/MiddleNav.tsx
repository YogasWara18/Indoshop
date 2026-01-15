"use client";

import Link from "next/link";
import Image from "next/image";

export default function MiddleNav() {
  return (
    <div className="w-full bg-[var(--prim-light)] border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-5 px-[8%] lg:px-[12%]">
        {/* Logo */}
        <Link href="#">
          <Image
            src="/Logo.png"
            alt="Indoshop Logo"
            width={250}
            height={0}
            className="absolute -top-22 left-32 h-auto object-contain"
          />
        </Link>

        {/* Search */}
        <div className="flex flex-1 left-22 ms-6 lg:mx-0 max-w-xl relative">
          <input
            type="text"
            placeholder="Search for a Product or Brand"
            className="flex-1 border px-3 py-2 rounded-s-lg border-gray-400 outline-none"
          />
          <button className="bg-[var(--prim-color)] text-white px-3 rounded-r cursor-pointer">
            <i className="bi bi-search"></i>
          </button>

          {/* Location Dropdown */}
          <div className="hidden lg:flex text-sm ms-5 bg-white items-center ps-4 rounded-lg border border-gray-400">
            <i className="bi bi-geo-alt text-lg text-[var(--prim-color)]"></i>
            <select
              name="location"
              className="px-3 rounded-lg text-[var(--prim-color)] font-semibold focus:border-[var(--prim-color)] appearance-none cursor-pointer outline-none"
              defaultValue="Indonesia"
            >
              <option>Indonesia</option>
              <option>Aceh</option>
              <option>Medan</option>
              <option>Jakarta</option>
              <option>Bali</option>
              <option>Surabaya</option>
            </select>
          </div>
        </div>

        {/* Wishlist & Cart */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Wishlist */}
          <Link href="#" className="relative">
            <i className="bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
            <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </Link>
          {/* Cart */}
          <Link href="#" className="relative">
            <i className="bi bi-cart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
            <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
