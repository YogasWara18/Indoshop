"use client";
import { FiSearch, FiShoppingCart, FiBell, FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function MobileTopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-700 active:scale-95 transition-transform">
            <FiMenu size={24} />
          </button>
          <h1 className="text-xl font-extrabold text-[var(--prim-color)] tracking-tight">
            Indoshop
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 relative text-gray-700 active:scale-95 transition-transform">
            <FiBell size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--prim-color)] rounded-full border-2 border-white"></span>
          </button>
          <Link href="/cart" className="p-2 relative text-gray-700 active:scale-95 transition-transform">
            <FiShoppingCart size={22} />
            <span className="absolute top-0 right-0 bg-[var(--prim-color)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
              3
            </span>
          </Link>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="px-4 pb-3">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2.5 focus-within:ring-2 ring-[var(--prim-color)] transition-all">
          <FiSearch className="text-gray-400 mr-2" size={18} />
          <input
            type="text"
            placeholder="Cari produk seni premium..."
            className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
    </header>
  );
}