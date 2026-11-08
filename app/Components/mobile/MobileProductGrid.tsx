interface Product {
  id?: string | number;
  title?: string;
  name?: string;
  nama_produk?: string;
  price?: string | number;
  harga?: string | number;
  originalPrice?: string | number;
  price_before_discount?: string | number;
  image?: string;
  img?: string;
  gambar?: string;
  rating?: string | number;
  sold?: string | number;
}

interface Props {
  // ✅ GANTI 'any' MENJADI 'unknown' AGAR ESLINT SENANG
  products: unknown; 
  title: string;
  subtitle?: string;
}

export default function MobileProductGrid({ products, title, subtitle }: Props) {
  let productList: Product[] = [];
  
  // Logika pengecekan tipe yang aman untuk TypeScript
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
    <section className="py-6 px-4 lg:hidden">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-center text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500 text-center mt-1">{subtitle}</p>}
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {productList.map((p, index) => (
          <div key={p.id || index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col active:scale-[0.98] transition-transform duration-200">
            
            <div className="relative aspect-square w-full bg-gray-50 flex items-center justify-center">
              <img 
                src={p.image || p.img || p.gambar || "https://via.placeholder.com/300?text=No+Image"} 
                alt={p.title || p.name || "Produk"} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="p-3 flex flex-col flex-grow text-center">
              <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug">
                {p.title || p.name || p.nama_produk || "Nama Produk"}
              </h3>
              
              <div className="mt-2 flex items-center justify-center gap-1">
                <span className="text-[10px] text-yellow-500">★</span>
                <span className="text-[10px] text-gray-500 font-medium">
                  {p.rating || "5.0"} | {p.sold || "10"} Terjual
                </span>
              </div>
              
              <div className="mt-2 flex flex-col items-center">
                <p className="text-sm font-extrabold text-[var(--prim-color)]">
                  {String(p.price || p.harga || "").includes('Rp') 
                    ? (p.price || p.harga) 
                    : `Rp ${p.price || p.harga || 0}`}
                </p>
                
                {(p.originalPrice || p.price_before_discount) && (
                  <p className="text-[10px] text-gray-400 line-through">
                    {String(p.originalPrice || p.price_before_discount || "").includes('Rp')
                      ? (p.originalPrice || p.price_before_discount)
                      : `Rp ${p.originalPrice || p.price_before_discount}`}
                  </p>
                )}
              </div>
              
              <div className="mt-auto pt-3">
                <button className="w-full py-2 bg-red-50 text-[var(--prim-color)] font-bold text-xs rounded-xl active:bg-[var(--prim-color)] active:text-white transition-colors duration-200">
                  + Keranjang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}