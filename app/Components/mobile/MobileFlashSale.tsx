// app/Components/mobile/MobileFlashSale.tsx
import { FiClock } from "react-icons/fi";

interface Product {
  id?: string | number;
  title?: string;
  name?: string;
  nama_produk?: string;
  price?: string | number;
  harga?: string | number;
  image?: string;
  img?: string;
  gambar?: string;
}

// ✅ KITA GUNAKAN INTERFACE TERPISAH, TIDAK ADA 'any' DI SINI
interface Props {
  products: unknown; 
}

export default function MobileFlashSale({ products }: Props) {
  let productList: Product[] = [];
  
  // Logika ekstraksi data tanpa 'any'
  if (Array.isArray(products)) {
    productList = products as Product[];
  } else if (products && typeof products === 'object') {
    const obj = products as Record<string, unknown>;
    const extractedData = obj.data || obj.products || obj.items || Object.values(obj).find(Array.isArray);
    
    if (Array.isArray(extractedData)) {
      productList = extractedData as Product[];
    }
  }

  if (productList.length === 0) return null;

  return (
    <section className="bg-gradient-to-br from-red-50 to-orange-50 py-5 my-4 rounded-3xl mx-4 lg:hidden shadow-sm border border-red-100">
      <div className="flex flex-col items-center px-4 mb-4">
        <h2 className="text-xl font-extrabold text-[var(--prim-color)] text-center">Flash Sale 🔥</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="flex items-center gap-1 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            <FiClock size={14} /> 02 : 15 : 30
          </span>
        </div>
      </div>
      
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-hide">
        {productList.slice(0, 5).map((p, index) => (
          <div key={p.id || index} className="snap-start min-w-[150px] bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="relative h-36 w-full bg-gray-50">
              <img 
                src={p.image || p.img || p.gambar || "https://via.placeholder.com/150?text=No+Image"} 
                alt={p.title || p.name || "Produk"} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-3 flex flex-col flex-grow text-center">
              <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 leading-tight">
                {p.title || p.name || p.nama_produk || "Nama Produk"}
              </h3>
              <p className="text-sm font-extrabold text-[var(--prim-color)] mt-2">
                {String(p.price || p.harga || "").includes('Rp') 
                  ? (p.price || p.harga) 
                  : `Rp ${p.price || p.harga || 0}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}