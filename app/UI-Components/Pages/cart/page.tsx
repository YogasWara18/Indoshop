"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartItem = {
  Id: string;
  title: string;
  price: string;
  review: string;
  qty?: number;
  image: string;
};

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  const estimatedTaxes = 10;

  useEffect(() => {
    const loadCart = () => {
      try {
        const cart: CartItem[] = JSON.parse(
          localStorage.getItem("cart") || "[]",
        );
        setCartItems(cart);

        // Hitung subtotal
        const total = cart.reduce((acc: number, item: CartItem) => {
          const quantity = item.qty ?? 1;
          const priceNum = parseFloat(item.price.replace(/[^0-9]/g, "")) || 0;
          return acc + priceNum * quantity;
        }, 0);

        setSubtotal(total);
      } catch (error) {
        console.error("Failed to load cart", error);
        setCartItems([]);
        setSubtotal(0);
      }
    };

    loadCart();
    window.addEventListener("storageUpdate", loadCart);
    return () => window.removeEventListener("storageUpdate", loadCart);
  }, []);

  const handleRemove = (productId: string) => {
    const updateCart = cartItems.filter((item) => item.Id !== productId);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    window.dispatchEvent(new Event("storageUpdate"));
    toast.success("Product removed from Cart!");
  };

  const handleQtyChange = (productId: string, qty: number) => {
    const updateCart = cartItems.map((item) => 
        item.Id === productId ? {...item, qty } : item
    );
    localStorage.setItem("cart", JSON.stringify(updateCart));
    window.dispatchEvent(new Event("storageUpdate"));
  }

  return (
   <>
   <div className="px-[8%] lg:px-[12%] bg-[#f1c6c6c5] py-5">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-2xl">Shopping Cart</h2>
          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; :
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp; Cart
            </h2>
          </div>
        </div>
      </div>
   </>
  );
}
