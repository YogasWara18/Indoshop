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
            className="absolute -top-21 left-32 h-auto object-contain"
          />
        </Link>

        {/* Search */}
        <div className="flex flex-1 ms-6 lg:mx-0 max-w-xl relative">
            <input 
            type="text" 
            placeholder="Search for a Product or Brand"
            className="flex-1 border px-3 py-2 rounded-s-lg border-gray-400 outline-none"
            />
            <button className="bg-[var(--prim-color)] text-white px-3 rounded-r cursor-pointer">
                <i className="bi bi-search"></i>
            </button>
        </div>
      </div>
    </div>
  );
}
