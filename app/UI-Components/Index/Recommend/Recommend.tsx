"use client";

import Image from "next/image";
import Link from "next/link";

import products from "@/app/JsonData/Recommend.json";

import toast from "react-hot-toast";

export default function Recommend() {
  const handleAddToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: any) => item.Id === product.Id);

    if (existingProduct) {
      toast(`${product.title} is already in the cart`, {
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

      toast.success(`${product.title} added to cart`);
    }
  };

  const handleAddToWishlist = (product: any) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const existingProduct = wishlist.find(
      (item: any) => item.Id === product.Id,
    );

    if (existingProduct) {
      toast(`${product.title} is already in the wishlist`, {
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
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-4 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <h1 className="text-5xl Unbounded">Recommended for you</h1>
      </div>

      {/* Recommend product */}
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.Id}
              className="product-wrap border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative flex justify-center items-center w-full h-56 bg-gray-50 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain max-h-full"
                />
                <div
                  onClick={() => handleAddToCart(product)}
                  className="absolute bottom-2 right-2"
                ></div>
              </div>

              {/* Product Info */}
              <Link
                href={{
                  pathname: "/UI-Components/Shop",
                  query: { id: product.Id },
                }}
              >
                <div className="space-y-2 mt-3 product-info">
                  <div className="flex flex-col">
                    {/* Harga utama */}
                    <span className="text-base font-semibold text-[var(--prim-color)]">
                      {product.price}{" "}
                      <span className="text-gray-500 text-sm">/Pcs</span>
                    </span>
                    {/* Harga coret */}
                    <span className="text-gray-400 text-sm line-through">
                      {product.lessprice}
                    </span>
                  </div>

                  {/* Review */}
                  <span className="flex items-center text-yellow-500 text-sm">
                    <i className="bi bi-star-fill me-1"></i> {product.review}
                  </span>

                  {/* Judul Produk */}
                  <h2 className="text-md font-medium Unbounded my-2 hover:text-[var(--prim-color)] transition-colors truncate">
                    {product.title}
                  </h2>

                  {/* Seller */}
                  <h6 className="text-sm text-gray-600 flex items-center gap-1">
                    <i className="bi bi-shop text-[var(--prim-color)]"></i> By
                    indoshop
                  </h6>

                  {/* Sold */}
                  <h3 className="text-sm text-gray-500">
                    Sold: {product.sold}
                  </h3>
                </div>
              </Link>

              {/* Add to Cart Button - Full Width at Bottom */}
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-3 mt-3 font-semibold text-white 
             bg-[var(--prim-color)] 
             hover:bg-[var(--prim-light)] 
             hover:scale-[1.02] 
             hover:shadow-md 
             transition-all 
             duration-300 
             ease-in-out 
             text-sm 
             rounded-b-xl 
             flex items-center justify-center gap-2"
              >
                Add to Cart <i className="bi bi-cart"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
