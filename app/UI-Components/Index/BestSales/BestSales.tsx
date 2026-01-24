"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";



import products from "@/app/JsonData/BestSales.json";

export default function BestSales() {
  const handleAddToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item: any) => item.Id === product.Id);

    if (existingProduct) {
      toast(`${product.title} sudah ada di keranjang`, {
        icon: "⚡",
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
    } else {
      cart.push({ ...product, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storageUpdate"));
      toast.success(`${product.title} Ditambahkan ke keranjang`);
    }
  };


   const handleAddToWishlist = (product: any) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const existingProduct = wishlist.find(
      (item: any) => item.Id === product.Id,
    );

    if (existingProduct) {
      toast(`${product.title} Item seni ini telah masuk ke wishlist Anda`, {
        icon: "⚡",
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
    } else {
      wishlist.push({ ...product, qty: 1 });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      window.dispatchEvent(new Event("storageUpdate"));

      toast.success(`${product.title} added to wishlist!`);
    }
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        {/* Title */}
        <div className="title my-4 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
          <h1 className="text-5xl Unbounded font-bold tracking-tight">
            Best Sales
          </h1>
        </div>

        {/* Product Grid - 2 Columns */}
        <div className="grid grid-cols-5 md:grid-cols-2 gap-2">
          {products.map((product) => (
            <div
              key={product.Id}
              className="flex flex-col lg:flex-row items-center lg:items-start gap-6 
             border border-gray-100 rounded-2xl p-6 
             bg-white/90 backdrop-blur-md shadow-md 
             transition-all duration-300 ease-in-out 
             hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] 
             hover:scale-[1.02] hover:border-[var(--prim-color)]/50"
            >
              {/* Image Section */}
              <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  className="object-contain mx-auto transition-transform duration-300 hover:scale-105"
                />

                {/* Wishlist Button */}
                <div
                  onClick={() => handleAddToWishlist(product)}
                  className="absolute top-3 left-3 bg-white p-2 rounded-full shadow hover:bg-[var(--prim-color)] hover:text-white transition cursor-pointer"
                >
                  <i className="bi bi-heart text-lg"></i>
                </div>

                {/* Sale Badge */}
                <span
                  className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white rounded-full shadow-md ${
                    product.sale === "New"
                      ? "bg-yellow-400"
                      : product.sale.includes("%")
                        ? "bg-red-500"
                        : "opacity-0"
                  }`}
                >
                  {product.sale}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex-1 space-y-3">
                <Link
                  href={{
                    pathname: "/UI-Components/Shop",
                    query: { id: product.Id },
                  }}
                >
                  <h2 className="text-lg font-semibold Unbounded hover:text-[var(--prim-color)] transition-colors">
                    {product.title}
                  </h2>
                </Link>

                {/* Harga */}
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-[var(--prim-color)]">
                    {product.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    {product.lessprice}
                  </span>
                  <span className="text-gray-500 text-sm">/Pcs</span>
                </div>

                {/* Review */}
                <span className="flex items-center text-yellow-500 text-sm">
                  <i className="bi bi-star-fill me-1"></i> {product.review}
                </span>

                {/* Seller */}
                <h6 className="text-sm text-gray-600 flex items-center gap-1">
                  <i className="bi bi-shop text-[var(--prim-color)]"></i> By
                  indoshop
                </h6>

                {/* Sold */}
                <h3 className="text-sm text-gray-500">Sold: {product.sold}</h3>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 w-full lg:w-auto px-6 py-2 rounded-lg bg-[var(--prim-color)] text-white font-semibold hover:bg-white hover:text-[var(--prim-color)] border border-[var(--prim-color)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <i className="bi bi-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}
