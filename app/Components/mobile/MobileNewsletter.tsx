export default function MobileNewsletter() {
  return (
    <section className="mx-4 my-8 p-6 bg-gray-900 rounded-3xl text-center lg:hidden relative overflow-hidden">
      {/* Ornamen Latar */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--prim-color)] rounded-full blur-3xl opacity-30"></div>
      
      <h2 className="text-xl font-bold text-white mb-2 mobile-text-center">Dapatkan Promo Eksklusif</h2>
      <p className="text-xs text-gray-400 mb-5 mobile-text-center">Berlangganan newsletter kami dan dapatkan diskon 10% untuk pembelian pertama.</p>
      
      <div className="flex flex-col gap-2">
        <input 
          type="email" 
          placeholder="Masukkan email Anda" 
          className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white text-sm outline-none focus:ring-2 ring-[var(--prim-color)] text-center"
        />
        <button className="w-full py-3 bg-[var(--prim-color)] text-white font-bold text-sm rounded-xl active:scale-95 transition-transform">
          Berlangganan
        </button>
      </div>
    </section>
  );
}