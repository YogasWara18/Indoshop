"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type wishlistItem = {
  Id: string;
  title: string;
  price: string;
  review: string;
  image: string;
};

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState<wishlistItem[]>([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const loadWishlist = () => {
      try {
        const wishlist: wishlistItem[] = JSON.parse(
          localStorage.getItem("wishlist") || "[]"
        );
        setWishlistItems(wishlist);
      } catch (error) {
        console.error("Failed to load wishlist", error);
        setWishlistItems([]);
      }
    };
    loadWishlist();
    window.addEventListener("storageUpdate", loadWishlist);
    return () => window.removeEventListener("storageUpdate", loadWishlist);
  }, []);

  // Remove Product from Wishlist
  const handleRemove = (productId: string) => {
    const updateWishlist = wishlistItems.filter((item) => item.Id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(updateWishlist));
    window.dispatchEvent(new Event("storageUpdate"));
    toast.success("Product Removed From Wishlist");
  };

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

  return (
    <>
      {/* Header */}
      <div className="px-[8%] lg:px-[12%] bg-[#f1c6c6c5] py-5">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-2xl">Wishlist</h2>
          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp; Wishlist
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[8%] lg:px-[12%] py-10">
        {wishlistItems.length === 0 ? (
          <p className="text-lg bg-red-200 px-5 py-2 rounded">
            Your Wishlist is Empty!
          </p>
        ) : (
          <div className="overflow-x-auto">
            {/* Desktop Table */}
            <table className="min-w-full border border-gray-600 rounded hidden lg:table">
              <thead className="bg-[var(--prim-light)]">
                <tr>
                  <th className="py-3 px-4 Unbounded border-r border-gray-600 font-normal text-left">
                    Product
                  </th>
                  <th className="py-3 px-4 Unbounded border-r border-gray-600 font-normal text-left">
                    Price
                  </th>
                  <th className="py-3 px-4 Unbounded border-r border-gray-600 font-normal text-left">
                    Stock Status
                  </th>
                  <th className="py-3 px-4 Unbounded border-r border-gray-600 font-normal text-left">
                    Add to Cart
                  </th>
                  <th className="py-3 px-4 Unbounded font-normal text-left cursor-pointer">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item) => (
                  <tr key={item.Id} className="border-b border-gray-600">
                    <td className="py-3 px-4 border-r border-gray-600">
                      <div className="flex gap-3 items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex flex-col">
                          <p className="font-medium Unbounded text-md">
                            {item.title}
                          </p>
                          <h6 className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            <i className="bi bi-shop text-[var(--prim-color)]"></i>{" "}
                            By indoshop
                          </h6>
                          <span className="flex items-center text-yellow-500 text-md">
                            <i className="bi bi-star-fill me-1"></i>{" "}
                            {item.review} Review
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 Unbounded border-r border-gray-600">
                      Rp
                      {Number(item.price.replace(/[^0-9]/g, "")).toLocaleString(
                        "id-ID"
                      )}
                    </td>
                    <td className="py-3 px-4 Unbounded border-r border-gray-600">
                      In Stock
                    </td>
                    <td className="px-1 border-r border-gray-600">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-full cursor-pointer px-3 py-2 my-2 text-xs font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-md hover:bg-[var(--prim-color)] hover:text-white transition"
                      >
                        Add To Cart <i className="bi bi-cart"></i>
                      </button>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        className="text-gray-500 hover:text-red-700 cursor-pointer"
                        onClick={() => handleRemove(item.Id)}
                      >
                        ✕ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Tablet Grid */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
              {wishlistItems.map((item) => (
                <div
                  key={item.Id}
                  className="border p-4 rounded flex gap-3 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium Unbounded text-lg">{item.title}</p>
                    <span className="text-gray-500 text-sm">
                      Rp
                      {Number(item.price.replace(/[^0-9]/g, "")).toLocaleString(
                        "id-ID"
                      )}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="mt-2 px-3 py-1 text-sm font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded hover:bg-[var(--prim-color)] hover:text-white transition"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile List */}
            <div className="md:hidden space-y-4">
              {wishlistItems.map((item) => (
                <div
                  key={item.Id}
                  className="border p-4 rounded flex gap-3 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium Unbounded text-lg">{item.title}</p>
                    <span className="text-gray-500 text-sm">
                      Rp
                      {Number(item.price.replace(/[^0-9]/g, "")).toLocaleString(
                        "id-ID"
                      )}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="mt-2 px-3 py-1 text-sm font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded hover:bg-[var(--prim-color)] hover:text-white transition"
                    >
                      Add To Cart
                    </button>
                    <button
                      className="mt-2 text-red-500 hover:text-red-700 cursor-pointer text-sm"
                      onClick={() => handleRemove(item.Id)}
                    >
                      ✕ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}