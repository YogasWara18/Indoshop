"use client";

import { useSearchParams } from "next/navigation";

import BestDeals from "@/app/JsonData/BestDeals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/HotDeals.json";
import TopProduct from "@/app/JsonData/TopProduct.json";
import Recommend from "@/app/JsonData/Recommend.json";

import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products/Products";

export default function ShopClient() {
  // Gabungkan semua produk dari berbagai JSON
  const allProducts = [
    ...BestDeals,
    ...BestSales,
    ...HotDeals,
    ...TopProduct,
    ...Recommend,
  ];

  // Ambil parameter id dari URL
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  // Render detail produk jika ada id, kalau tidak tampilkan daftar produk
  return (
    <div className="px-[8%] lg:px-[12%] py-10 bg-[#fff8f0]">
      {productId ? (
        <ProductDetails id={productId} products={allProducts} />
      ) : (
        <Products />
      )}
    </div>
  );
}