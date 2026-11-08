// app/page.tsx

// =========================================================
// 1. IMPORT KOMPONEN MOBILE (Desain Premium)
// =========================================================
import MobileTopBar from "@/app/Components/mobile/MobileTopBar";
import MobileHero from "@/app/Components/mobile/MobileHero";
import MobileCategory from "@/app/Components/mobile/MobileCategory";
import MobileFlashSale from "@/app/Components/mobile/MobileFlashSale";
import MobileProductGrid from "@/app/Components/mobile/MobileProductGrid";
import MobileNewsletter from "@/app/Components/mobile/MobileNewsletter";
import MobileBottomNav from "@/app/Components/mobile/MobileBottomNav";

// =========================================================
// 2. IMPORT KOMPONEN DESKTOP (Sesuai Struktur Folder Anda)
// =========================================================
import Navbar from "@/app/Components/Navbar/Navbar"; 
import Hero from "@/app/UI-Components/Index/Header/Hero";
import Category from "@/app/UI-Components/Index/Categories/Category";
import BestSales from "@/app/UI-Components/Index/BestSales/BestSales";
import TopProduct from "@/app/UI-Components/Index/Top-Product/TopProduct";
import BestDeals from "@/app/UI-Components/Index/Deals/Deals";
import HotDeals from "@/app/UI-Components/Index/Hot-Deals/HotDeals";
import Recommend from "@/app/UI-Components/Index/Recommend/Recommend";
import Blog from "@/app/UI-Components/Blogs/blog/page";
import Vendors from "@/app/UI-Components/Index/Vendors/Vendors";
import Newsletter from "@/app/UI-Components/Index/Newsletter/Newsletter";
import Footer from "@/app/Components/Footer/Footer";

// =========================================================
// 3. IMPORT FILE JSON (Data Asli)
// =========================================================
import JsonBestDeals from "@/app/JsonData/BestDeals.json";
import JsonHotDeals from "@/app/JsonData/HotDeals.json";
import JsonBestSales from "@/app/JsonData/BestSales.json";
import JsonRecommend from "@/app/JsonData/Recommend.json";
import JsonTopProduct from "@/app/JsonData/TopProduct.json";

export default function Home() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen pb-20 lg:pb-0">
      
      {/* =========================================================
          TAMPILAN MOBILE PREMIUM (Hanya Muncul di HP / Layar < 1024px)
          ========================================================= */}
      <div className="lg:hidden">
        <MobileTopBar />
        
        {/* Banner Hero Mobile mengambil gambar dari data HotDeals */}
        <MobileHero products={JsonHotDeals} />
        
        <MobileCategory />
        
        {/* Flash Sale Mobile */}
        <MobileFlashSale products={JsonHotDeals} />
        
        {/* Grid Produk Mobile */}
        <MobileProductGrid 
          products={JsonBestSales} 
          title="Terlaris Minggu Ini" 
          subtitle="Pilihan terbaik dari pengrajin lokal"
        />

        <MobileProductGrid 
          products={JsonTopProduct} 
          title="Produk Teratas" 
          subtitle="Kualitas premium yang paling dicari"
        />

        <MobileProductGrid 
          products={JsonRecommend} 
          title="Rekomendasi Untukmu" 
          subtitle="Berdasarkan minat dan gaya Anda"
        />

        <MobileProductGrid 
          products={JsonBestDeals} 
          title="Penawaran Terbaik" 
          subtitle="Harga spesial khusus hari ini"
        />

        <MobileNewsletter />
        
        <MobileBottomNav />
      </div>

      {/* =========================================================
          TAMPILAN DESKTOP (Kode Lama Anda - Muncul di Laptop/PC)
          ========================================================= */}
      <div className="hidden lg:block">
        {/* Navbar Desktop */}
        <Navbar />

        {/* Konten Utama Desktop */}
        <div className="container mx-auto px-4">
          <Hero />
          <Category />
          <BestDeals />
          <HotDeals />
          <BestSales />
          <TopProduct />
          <Recommend />
          
          {/* Blog dan Vendors hanya muncul di desktop */}
          <Blog />
          <Vendors />
          
          <Newsletter />
        </div>

        {/* Footer Desktop */}
        <Footer />
      </div>
      
    </main>
  );
}