"use client";

import Image from "next/image";
import products from "@/app/JsonData/Recommend.json";
import Link from "next/link";
import toast from "react-hot-toast";
import { useMemo, useState } from "react";

interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
  lessprice?: string;
  sale?: string;
  review?: string;
  sold?: number | string;
}

interface CartItem extends Product {
  qty: number;
}

/**
 * Pilih produk acak sekali saat module load.
 * Ini menghindari pemanggilan Math.random() di dalam render/component body.
 * Catatan: nilai ini akan tetap sama selama module tidak di-reload.
 */
const RANDOM_PRODUCT: Product | null =
  products && products.length > 0 ? products[Math.floor(Math.random() * products.length)] : null;

export default function Products() {
  const [price, setPrice] = useState<number>(100);
  const [discount50, setDiscount50] = useState<boolean>(false);
  const [discount30, setDiscount30] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<boolean>(false);

  // Hitung produk yang lolos filter dengan useMemo (efisien & bebas lint rule set-state-in-effect)
  const filterProducts = useMemo(() => {
    let result = products.slice();

    result = result.filter((p) => {
      // Ambil angka dari string harga, misal "Rp 10.000" -> 10000
      const productPrice = parseFloat(String(p.price).replace(/[^0-9.-]+/g, ""));
      return productPrice <= price;
    });

    if (discount50) result = result.filter((p) => p.sale?.includes("50%"));
    if (discount30) result = result.filter((p) => p.sale?.includes("30%"));
    if (isNew) result = result.filter((p) => p.sale === "New");

    return result;
  }, [price, discount50, discount30, isNew]);

  const handleAddToCart = (product: Product) => {
    try {
      const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingProduct = cart.find((item) => item.id === product.id);

      if (existingProduct) {
        toast(`${product.title} sudah ada di keranjang.`);
      } else {
        cart.push({ ...product, qty: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("storageUpdate"));
        toast.success(`${product.title} Ditambahkan ke keranjang!`);
      }
    } catch (err) {
      console.error("handleAddToCart error:", err);
      toast.error("Gagal menambahkan ke keranjang.");
    }
  };

  const handleAddToWishlist = (product: Product) => {
    try {
      const wishlist: CartItem[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const existingProduct = wishlist.find((item) => item.id === product.id);

      if (existingProduct) {
        toast(`${product.title} sudah ada di wishlist.`);
      } else {
        wishlist.push({ ...product, qty: 1 });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        window.dispatchEvent(new Event("storageUpdate"));
        toast.success(`${product.title} Ditambahkan ke wishlist!`);
      }
    } catch (err) {
      console.error("handleAddToWishlist error:", err);
      toast.error("Gagal menambahkan ke wishlist.");
    }
  };

  const handleResetFilters = () => {
    setPrice(100);
    setDiscount50(false);
    setDiscount30(false);
    setIsNew(false);
  };

  return (
    <div className="px-[5%] sm:px-[8%] lg:px-[12%] py-10">
      <div className="my-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-5">
          {/* Sidebar */}
          <div className="w-full md:w-1/2 lg:w-1/3 relative lg:sticky top-22 left-0 h-fit">
            <div className="border border-gray-300 shadow rounded p-3">
              <div className="border-b w-full border-gray-300 pb-3 flex items-center justify-between">
                <h2 className="text-xl sm:text-xl Unbounded">Product Category</h2>
                <button
                  onClick={handleResetFilters}
                  className="border border-gray-300 px-2 py-1 rounded cursor-pointer hover:border-gray-500 transition-all duration-300 text-sm sm:text-base"
                >
                  Reset
                </button>
              </div>

              {/* Price Range */}
              <div className="mt-4">
                <h3 className="text-lg sm:text-lg font-medium mb-2">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">Rp0</span>
                  <input
                    type="range"
                    min={0}
                    max={10000000}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full accent-[var(--prim-color)]"
                  />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">Rp{price}</span>
                </div>
              </div>

              {/* Discount */}
              <div className="mt-6">
                <h3 className="text-base sm:text-lg font-medium mb-2">Discount</h3>
                <form className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={discount50}
                      onChange={(e) => setDiscount50(e.target.checked)}
                      className="form-checkbox accent-[var(--prim-color)]"
                    />
                    <span className="text-sm sm:text-base">50% off</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={discount30}
                      onChange={(e) => setDiscount30(e.target.checked)}
                      className="form-checkbox accent-[var(--prim-color)]"
                    />
                    <span className="text-sm sm:text-base">30% off</span>
                  </label>
                </form>
              </div>

              {/* Other */}
              <div className="mt-6">
                <h3 className="text-base sm:text-lg font-medium mb-2">Other</h3>
                <form className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isNew}
                      onChange={(e) => setIsNew(e.target.checked)}
                      className="form-checkbox accent-[var(--prim-color)]"
                    />
                    <span className="text-sm sm:text-base">New Products</span>
                  </label>
                </form>
              </div>
            </div>

            {/* Random Product (module-scope) */}
            {RANDOM_PRODUCT && (
              <div className="mt-4">
                <div
                  key={RANDOM_PRODUCT.id}
                  className="product-wrap border border-gray-200 rounded-xl p-3 sm:p-4 bg-white shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer duration-300 overflow-hidden"
                >
                  <div className="relative flex justify-center items-center w-full h-40 sm:h-48 md:h-56 bg-gray-50 rounded-lg">
                    <Image
                      src={RANDOM_PRODUCT.image}
                      alt={RANDOM_PRODUCT.title}
                      width={200}
                      height={200}
                      className="object-contain max-h-full"
                    />
                    <div
                      onClick={() => handleAddToWishlist(RANDOM_PRODUCT)}
                      className="absolute bottom-2 right-2"
                    >
                      <i className="bi bi-heart text-gray-600 text-lg sm:text-xl hover:text-[var(--prim-color)] transition-all"></i>
                    </div>
                    <span
                      className={`absolute off-product top-0 right-0 px-4 py-2 EB_Garamond text-xs font-bold text-white rounded ${
                        RANDOM_PRODUCT.sale === "New"
                          ? "bg-yellow-400"
                          : RANDOM_PRODUCT.sale?.includes("%")
                          ? "bg-red-500"
                          : "opacity-0"
                      }`}
                    >
                      {RANDOM_PRODUCT.sale}
                    </span>
                  </div>

                  {/* Product Info */}
                  <Link
                    href={{
                      pathname: "/UI-Components/Shop",
                      query: { id: RANDOM_PRODUCT.id },
                    }}
                  >
                    <div className="space-y-2 mt-3 product-info">
                      <div className="flex flex-col">
                        <span className="text-sm sm:text-base font-semibold text-[var(--prim-color)]">
                          {RANDOM_PRODUCT.price}{" "}
                          <span className="text-gray-500 text-xs sm:text-sm">/Pcs</span>
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm line-through">
                          {RANDOM_PRODUCT.lessprice}
                        </span>
                      </div>
                      <span className="flex items-center text-yellow-500 text-xs sm:text-sm">
                        <i className="bi bi-star-fill me-1"></i> {RANDOM_PRODUCT.review}
                      </span>
                      <h2 className="text-sm sm:text-md font-medium Unbounded my-2 hover:text-[var(--prim-color)] transition-colors truncate">
                        {RANDOM_PRODUCT.title}
                      </h2>
                      <h6 className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                        <i className="bi bi-shop text-[var(--prim-color)]"></i> By indoshop
                      </h6>
                      <h3 className="text-sm text-gray-500">Sold: {RANDOM_PRODUCT.sold}</h3>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {filterProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-xl p-3 sm:p-4 bg-white shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer duration-300 overflow-hidden"
              >
                <div className="relative flex justify-center items-center w-full h-56 bg-gray-50 rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-contain max-h-full"
                  />
                  <div
                    onClick={() => handleAddToWishlist(product)}
                    className="absolute bottom-2 right-2"
                  >
                    <i className="bi bi-heart text-gray-600 text-xl hover:text-[var(--prim-color)] transition-all"></i>
                  </div>
                  <span
                    className={`absolute off-product top-0 right-0 px-4 py-2 EB_Garamond text-xs font-bold text-white rounded ${
                      product.sale === "New"
                        ? "bg-yellow-400"
                        : product.sale?.includes("%")
                        ? "bg-red-500"
                        : "opacity-0"
                    }`}
                  >
                    {product.sale}
                  </span>
                </div>

                {/* Product Info */}
                <Link
                  href={{
                    pathname: "/UI-Components/Shop",
                    query: { id: product.id },
                  }}
                >
                  <div className="space-y-2 mt-3 product-info">
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-[var(--prim-color)]">
                        {product.price} <span className="text-gray-500 text-sm">/Pcs</span>
                      </span>
                      <span className="text-gray-400 text-sm line-through">{product.lessprice}</span>
                    </div>
                    <span className="flex items-center text-yellow-500 text-sm">
                      <i className="bi bi-star-fill me-1"></i> {product.review}
                    </span>
                    <h2 className="text-md font-medium Unbounded my-2 hover:text-[var(--prim-color)] transition-colors truncate">
                      {product.title}
                    </h2>
                    <h6 className="text-sm text-gray-600 flex items-center gap-1">
                      <i className="bi bi-shop text-[var(--prim-color)]"></i> By indoshop
                    </h6>
                    <h3 className="text-sm text-gray-500">Sold: {product.sold}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}