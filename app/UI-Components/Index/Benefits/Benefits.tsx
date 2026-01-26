export default function Benefits() {
  return (
    <div className="px-[8%] lg:px-[12%] py-16 bg-[#fdf6ec]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Benefit 1 */}
        <div className="flex flex-col items-center text-center gap-4 px-6 py-10 rounded-3xl 
                        bg-white/30 backdrop-blur-md border border-[var(--prim-light)]/40 shadow-md 
                        hover:shadow-[0_0_25px_var(--prim-light)] hover:scale-105 
                        transition-all duration-500 ease-out group">
          <div className="relative">
            <i className="bi bi-truck text-3xl rounded-full bg-[var(--prim-color)] px-5 py-4 text-white shadow-lg 
                          group-hover:shadow-[0_0_20px_var(--prim-color)] transition-all duration-500"></i>
          </div>
          <h2 className="font-semibold Unbounded text-base text-[var(--prim-color)]">Free Pengiriman</h2>
          <p className="text-gray-700 text-sm italic">Aman ke seluruh Indonesia</p>
        </div>

        {/* Benefit 2 */}
        <div className="flex flex-col items-center text-center gap-4 px-6 py-10 rounded-3xl 
                        bg-white/30 backdrop-blur-md border border-[var(--prim-light)]/40 shadow-md 
                        hover:shadow-[0_0_25px_var(--prim-light)] hover:scale-105 
                        transition-all duration-500 ease-out group">
          <div className="relative">
            <i className="bi bi-shield-check text-3xl rounded-full bg-[var(--prim-color)] px-5 py-4 text-white shadow-lg 
                          group-hover:shadow-[0_0_20px_var(--prim-color)] transition-all duration-500"></i>
          </div>
          <h2 className="font-semibold Unbounded text-base text-[var(--prim-color)]">Authentic & Verified</h2>
          <p className="text-gray-700 text-sm italic">Sertifikat keaslian karya</p>
        </div>

        {/* Benefit 3 */}
        <div className="flex flex-col items-center text-center gap-4 px-6 py-10 rounded-3xl 
                        bg-white/30 backdrop-blur-md border border-[var(--prim-light)]/40 shadow-md 
                        hover:shadow-[0_0_25px_var(--prim-light)] hover:scale-105 
                        transition-all duration-500 ease-out group">
          <div className="relative">
            <i className="bi bi-gem text-3xl rounded-full bg-[var(--prim-color)] px-5 py-4 text-white shadow-lg 
                          group-hover:shadow-[0_0_20px_var(--prim-color)] transition-all duration-500"></i>
          </div>
          <h2 className="font-semibold Unbounded text-base text-[var(--prim-color)]">Koleksi Premium</h2>
          <p className="text-gray-700 text-sm italic">Eksklusif seni & kriya Nusantara</p>
        </div>

        {/* Benefit 4 */}
        <div className="flex flex-col items-center text-center gap-4 px-6 py-10 rounded-3xl 
                        bg-white/30 backdrop-blur-md border border-[var(--prim-light)]/40 shadow-md 
                        hover:shadow-[0_0_25px_var(--prim-light)] hover:scale-105 
                        transition-all duration-500 ease-out group">
          <div className="relative">
            <i className="bi bi-people text-3xl rounded-full bg-[var(--prim-color)] px-5 py-4 text-white shadow-lg 
                          group-hover:shadow-[0_0_20px_var(--prim-color)] transition-all duration-500"></i>
          </div>
          <h2 className="font-semibold Unbounded text-base text-[var(--prim-color)]">Support Seniman Lokal</h2>
          <p className="text-gray-700 text-sm italic">Setiap pembelian membantu pengrajin</p>
        </div>

      </div>
    </div>
  )
}