import { FiHome, FiGrid, FiHeart, FiUser } from "react-icons/fi";
import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 flex justify-around items-center py-2 pb-safe z-50 lg:hidden shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
      <Link href="/" className="flex flex-col items-center text-[var(--prim-color)] w-16">
        <FiHome size={22} className="mb-1" />
        <span className="text-[10px] font-bold">Beranda</span>
      </Link>
      
      <Link href="/shop" className="flex flex-col items-center text-gray-400 hover:text-[var(--prim-color)] w-16 transition-colors">
        <FiGrid size={22} className="mb-1" />
        <span className="text-[10px] font-medium">Kategori</span>
      </Link>
      
      <Link href="/wishlist" className="flex flex-col items-center text-gray-400 hover:text-[var(--prim-color)] w-16 transition-colors">
        <FiHeart size={22} className="mb-1" />
        <span className="text-[10px] font-medium">Favorit</span>
      </Link>
      
      <Link href="/profile" className="flex flex-col items-center text-gray-400 hover:text-[var(--prim-color)] w-16 transition-colors">
        <FiUser size={22} className="mb-1" />
        <span className="text-[10px] font-medium">Akun</span>
      </Link>
    </nav>
  );
}