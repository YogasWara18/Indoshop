"use client";

import Link from "next/link";
import Image from "next/image";

export default function MiddleNav() {
  return (
    <div className="w-full bg-[var(--prim-light)] border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-8 px-[8%] lg:px-[12%]">
        {/* Logo */}
        <Link href="#">
          <Image
            src="/Logo.png"
            alt="Indoshop Logo"
            width={250}
            height={0}
            className="absolute -top-23 left-32 h-auto object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
