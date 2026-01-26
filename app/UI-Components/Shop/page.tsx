"use client";

import { useSearchParams } from "next/navigation";

import BestDeals from "@/app/JsonData/BestDeals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/HotDeals.json";
import TopProduct from "@/app/JsonData/TopProduct.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products/Products";


type ProductType = {
  Id: string;
  image: string;
  title: string;
  price: string;
  lessprice: string;
  review: string;
  sold: string;
};

export default function ShopPage() {
  const allProducts: ProductType[] = [
    ...BestDeals,
    ...BestSales,
    ...HotDeals,
    ...TopProduct,
    ...Recommend,
  ].map((p) => ({
    Id: p.id, // ubah ke huruf besar
    image: p.image,
    title: p.title,
    price: p.price,
    lessprice: p.lessprice,
    review: p.review,
    sold: p.sold,
  }));

  const searchParams = useSearchParams();
  const productId = searchParams.get("id") ?? undefined;

  return productId ? (
    <ProductDetails id={productId} products={allProducts} />
  ) : (
    <Products />
  );
}
