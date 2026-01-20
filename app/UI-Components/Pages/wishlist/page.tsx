"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type wishlistItem = {
    Id: string;
    title: string;
    price: string;
    review: string;
    image: string;
}

export default function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState<wishlistItem[]>([]);

    // Load wishlist from localStorage

    useEffect(() => {
        const loadWishlist = () => {
            try {
                const wishlist: wishlistItem[] =JSON.parse(localStorage.getItem("wishlist") || "[]");
                setWishlistItems(wishlist);
            }
            catch (error) {
                console.error("Failed to load wishlist", error);
                setWishlistItems([]);
            };
        };
        loadWishlist();
        window.addEventListener("storageUpdate", loadWishlist);
        return () => window. removeEventListener("storageUpdate", loadWishlist);
    }, []);

    // Remove Product from Wishlist
    const handleRemove = (productId: string) => {
        const updateWishlist = wishlistItems.filter((item) => item.Id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(updateWishlist));
        window.dispatchEvent(new Event("storageUpdate"));
        toast.success("Product Removed From Wishlist")
    }

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
    <div className="px-[8%] lg:px-[12%] bg-[#f1c6c6c5] py-5">
        <div className="flex justify-between items-center">
            <h2 className="Unbounded text-2xl">Wishlist</h2>
            <div className="flex">
                <Link href="/" className="text-2xl Unbounded">
                    Home &nbsp; :
                </Link>
                <h2 className="Unbounded text-2xl text-[var(--prim-color)]"> &nbsp; Wishlist</h2>
            </div>
        </div>
    </div>
     <div className="px-[8%] lg:px-[12%] py-10">
        {wishlistItems.length === 0 ? (
            <p className="text-lg bg-red-200 px-5 py-2 rounded">Your Wishlist is Empty!</p>
        ) : (
            <div className="overflow-x auto">
                <div className="overflow-x-auto">
                    {/* Desktop List */}
                    <table className="min-w-full border border-gray-600 rounded hidden md:table">
                        <thead className="bg-[var(--prim-light)]">
                            <tr>
                                <th className="py-3 px-4 Unbounded border-r border-gray-600 font-normal text-left">Product</th>
                                <th className="py-3 px-4 Unbounded border-r border-gray-600 font-normal text-left">Price</th>
                                <th className="py-3 px-4 Unbounded border-r border-gray-600 font-normal text-left">Stock Status</th>
                                <th className="py-3 px-4 Unbounded border-r border-gray-600 font-normal text-left cursor-pointer">Add to Cart</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )}
     </div>
  </>
  )
}
