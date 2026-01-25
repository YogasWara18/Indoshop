"use client";

import { useSearchParams } from "next/navigation";

import BestDeals from "@/app/JsonData/BestDeals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/HotDeals.json";
import TopProduct from "@/app/JsonData/TopProduct.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products/Products";

export default function ShopPage() {
  const allProducts = [
    ...BestDeals,
    ...BestSales,
    ...HotDeals,
    ...TopProduct,
    ...Recommend,
  ];

  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  return (
    <div className="">
      {productId ? (
        <ProductDetails id={productId} products={allProducts} />
      ) : (
        <Products />
      )}
    </div>
  );
}
