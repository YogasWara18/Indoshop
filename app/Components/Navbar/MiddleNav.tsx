"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

// All Json Data
import BestDeals from "@/app/JsonData/BestDeals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/HotDeals.json";
import TopProduct from "@/app/JsonData/TopProduct.json";
import Recommend from "@/app/JsonData/Recommend.json";

interface ProductType {
  Id?: string;
  id?: string;
  title?: string;
  Name?: string;
  ProductImage?: string;
  image?: string;
  price?: string;
  Price?: string;
}

export default function MiddleNav() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Search State
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ProductType[]>([]);

  const allProducts: ProductType[] = useMemo(
    () => [
      ...BestDeals,
      ...BestSales,
      ...HotDeals,
      ...TopProduct,
      ...Recommend,
    ],
    [],
  );

  // Filter Product by search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter((p) =>
      (p.Name || p.title || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
    setResults(filtered);
  }, [searchTerm, allProducts]);

  useEffect(() => {
    const loadCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      const uniqueCart = new Set(cart.map((item: any) => item.Id));
      const uniqueWishlist = new Set(wishlist.map((item: any) => item.Id));

      setCartCount(uniqueCart.size);
      setWishlistCount(uniqueWishlist.size);
    };

    loadCounts();
    // gunakan event bawaan browser
    window.addEventListener("storage", loadCounts);
    return () => window.removeEventListener("storage", loadCounts);
  }, []);

  return (
    <div className="w-full bg-[var(--prim-light)] border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-5 px-[8%] lg:px-[12%]">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Indoshop Logo"
            width={250}
            height={80}
            className="h-auto object-contain w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px] relative sm:relative md:relative lg:absolute lg:-top-20 lg:left-32"
          />
        </Link>

        {/* Search */}
        <div className="flex flex-1 relative max-w-full sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto md:mx-auto lg:ml-auto lg:mr-30">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a Product or Brand"
            className="flex-1 border px-2 py-2 text-sm md:text-base rounded-s-lg border-gray-400 outline-none"
          />
          <button className="bg-[var(--prim-color)] text-white px-3 rounded-r cursor-pointer">
            <i className="bi bi-search"></i>
          </button>

          {/* Search Results Dropdown */}
          {results.length > 0 && (
            <div className="search-result absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-50">
              {results.map((item, index) => (
                <Link
                  key={`${item.Id}-${index}`}
                  href={{
                    pathname: "/UI-Components/Shop",
                    query: { id: item.Id },
                  }}
                  onClick={() => setSearchTerm("")}
                >
                  <div className="flex items-center gap-4 p-3 border-b border-gray-100 hover:bg-gray-50 hover:shadow-md transition-all duration-300">
                    {/* Product Image */}
                    <img
                      src={item.ProductImage || item.image}
                      alt={item.Name || item.title}
                      className="w-16 h-16 object-cover rounded-md shadow-sm"
                    />

                    {/* Product Info */}
                    <div className="flex flex-col flex-1">
                      <h3 className="font-semibold text-sm lg:text-base text-gray-800 truncate">
                        {item.Name || item.title}
                      </h3>
                      <p className="text-gray-500 text-xs lg:text-sm mt-1">
                        {item.Price || item.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Location Dropdown */}
          <div className="hidden lg:flex text-sm ms-5 bg-white items-center ps-4 rounded-lg border border-gray-400">
            <i className="bi bi-geo-alt text-lg text-[var(--prim-color)]"></i>
            <select
              name="location"
              className="px-3 rounded-lg text-[var(--prim-color)] font-semibold focus:border-[var(--prim-color)] appearance-none cursor-pointer outline-none"
              defaultValue="Indonesia"
            >
              <option>Indonesia</option>
              <option>Aceh</option>
              <option>Medan</option>
              <option>Jakarta</option>
              <option>Bali</option>
              <option>Surabaya</option>
            </select>
          </div>
        </div>

        {/* Wishlist & Cart */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Wishlist */}
          <Link href="/UI-Components/Pages/wishlist" className="relative">
            <i className="bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>
          {/* Cart */}
          <Link href="/UI-Components/Pages/cart" className="relative">
            <i className="bi bi-cart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--prim-color)] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
