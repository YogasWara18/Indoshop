// app/Components/mobile/MobileHero.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Tipe data untuk produk dari JSON
interface Product {
  id?: string | number;
  title?: string;
  name?: string;
  nama_produk?: string;
  image?: string;
  img?: string;
  gambar?: string;
}

// ✅ TAMBAHKAN INTERFACE PROPS INI AGAR MENERIMA DATA DARI PAGE.TSX
interface Props {
  products: unknown;
}

export default function MobileHero({ products }: Props) {
  let productList: Product[] = [];

  // Ekstrak array dari JSON yang dikirim page.tsx
  if (Array.isArray(products)) {
    productList = products as Product[];
  } else if (products && typeof products === 'object') {
    const obj = products as Record<string, unknown>;
    const extractedData = obj.data || obj.products || obj.items || Object.values(obj).find(Array.isArray);
    if (Array.isArray(extractedData)) {
      productList = extractedData as Product[];
    }
  }

  // Ambil maksimal 2 produk pertama untuk dijadikan Banner Hero
  const banners = productList.slice(0, 2);

  // Jika data kosong, jangan tampilkan apa-apa (mencegah error)
  if (banners.length === 0) return null;

  return (
    <section className="px-4 pt-4 pb-2 lg:hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden h-[200px] shadow-lg"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={item.id || index}>
            <div className="relative w-full h-full bg-gray-200">
              {/* GAMBAR LOKAL DARI FOLDER PUBLIC (Diambil dari data JSON) */}
              <img 
                src={item.image || item.img || item.gambar || "/Hero-bg.png"} 
                alt={item.title || item.name || "Banner"} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              {/* Overlay Teks */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-white text-xl font-bold mb-2 text-center line-clamp-2">
                  {item.title || item.name || item.nama_produk || "Koleksi Premium"}
                </h2>
                <p className="text-gray-200 text-xs mb-3 text-center">Dapatkan penawaran spesial hari ini</p>
                <button className="bg-[var(--prim-color)] text-white text-sm font-semibold px-6 py-2 rounded-full active:scale-95 transition-transform shadow-md">
                  Belanja Sekarang
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}