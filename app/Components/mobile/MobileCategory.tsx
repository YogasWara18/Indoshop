// app/Components/mobile/MobileCategory.tsx
"use client";
import Link from "next/link";

// ✅ DATA KATEGORI: Sesuaikan nama gambar dengan yang ada di folder public Anda
const categoriesData = [
  { id: 1, name: "Keramik", image: "/Category-5.png", products: "625+" },
  { id: 2, name: "Ukiran", image: "/Category-6.png", products: "725+" },
  { id: 3, name: "Perak", image: "/Category-7.png", products: "525+" },
  { id: 4, name: "Emas", image: "/Category-8.png", products: "525+" },
  { id: 5, name: "Wayang", image: "/Category-9.png", products: "925+" },
  { id: 6, name: "Topeng", image: "/Category-10.png", products: "1025+" },
  { id: 7, name: "Gerabah", image: "/Category-11.png", products: "1125+" },
];

export default function MobileCategory() {
  return (
    <section className="py-8 lg:hidden bg-white">
      <h2 className="text-xl font-bold text-center text-gray-900 mb-6">Kategori Pilihan</h2>
      
      {/* Container Scroll Horizontal */}
      <div className="flex gap-5 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
        {categoriesData.map((cat) => (
          <Link 
            href={`/category/${cat.id}`} 
            key={cat.id} 
            className="snap-start flex flex-col items-center min-w-[100px] active:scale-95 transition-transform"
          >
            {/* Gambar Kategori (Tanpa lingkaran, menggunakan object-contain) */}
            <div className="w-20 h-20 mb-3 flex items-center justify-center">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-contain drop-shadow-md" 
              />
            </div>

            {/* Judul Kategori (Tebal & Besar seperti di Desktop) */}
            <span className="text-[15px] font-extrabold text-gray-900 text-center mb-1">
              {cat.name}
            </span>

            {/* Subteks Jumlah Produk */}
            <span className="text-[11px] font-medium text-gray-500 text-center">
              {cat.products} Products
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}