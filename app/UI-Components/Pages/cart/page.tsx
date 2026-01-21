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
      item.Id === productId ? { ...item, qty } : item,
    );
    localStorage.setItem("cart", JSON.stringify(updateCart));
    window.dispatchEvent(new Event("storageUpdate"));
  };

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

      <div className="px-[8%] lg:px-[12%] py-10">
        {cartItems.length === 0 ? (
          <p className="text-lg bg-red-200 px-5 py-2 rounded">
            Your Cart is empty!
          </p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 overflow-x-auto">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-600 rounded-xl shadow-lg hidden md:table overflow-hidden">
                  <thead className="bg-[var(--prim-light)] text-gray-800">
                    <tr>
                      <th className="py-3 px-4 Unbounded font-normal text-left">
                        Product
                      </th>
                      <th className="py-3 px-4 Unbounded font-normal text-left">
                        Price
                      </th>
                      <th className="py-3 px-4 Unbounded font-normal text-left">
                        Quantity
                      </th>
                      <th className="py-3 px-4 Unbounded font-normal text-left">
                        Subtotal
                      </th>
                      <th className="py-3 px-4 Unbounded font-normal text-left ">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item: CartItem) => {
                      const quantity = item.qty ?? 1;
                      const priceNum = parseFloat(item.price.replace(/[^0-9]/g, "")) || 0; // simpan ke variabel
                      const itemSubtotal = priceNum * quantity;

                      return (
                        <tr key={item.Id} className="border-b border-gray-600 hover:bg-gray-100 transition">
                          <td className="py-4 px-6 flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-20 h-20 object-cover rounded"
                            />
                            <div>
                              <p className="font-medium Unbounded text-md">
                                {item.title}
                              </p>
                              <h6 className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                <i className="bi bi-shop text-[var(--prim-color)]"></i>
                                By indoshop
                              </h6>
                              <span className="flex items-center text-yellow-500 text-md">
                                <i className="bi bi-star-fill me-1"></i>{" "}
                                {item.review} Review
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4 Unbounded">
                            Rp
                            {Number(
                              item.price.replace(/[^0-9]/g, ""),
                            ).toLocaleString("id-ID")}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center border w-24 rounded">
                              <button
                                className="px-2 text-lg cursor-pointer"
                                onClick={() =>
                                  handleQtyChange(
                                    item.Id,
                                    Math.max(1, quantity - 1),
                                  )
                                }
                              >
                                -
                              </button>

                              <span className="px-4">{quantity}</span>
                              <button
                                className="px-2 text-lg cursor-pointer"
                                onClick={() =>
                                  handleQtyChange(
                                    item.Id,
                                    Math.max(1, quantity + 1),
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-3 px-4 Unbounded">
                            Rp{itemSubtotal.toLocaleString("id-ID")}
                          </td>
                          <td className="py-3 px-4 Unbounded">
                            <button
                              className="text-red-500 hover:text-red-700 cursor-pointer"
                              onClick={() => handleRemove(item.Id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* Mobile List */}
                <div className="md:hidden space-y-4">
                  {cartItems.map((item) => {
                    const quantity = item.qty ?? 1;
                    const priceNum =
                      parseFloat(item.price.replace(/[^0-9]/g, "")) || 0;
                    const itemSubtotal = priceNum * quantity;

                    return (
                      <div
                        key={item.Id}
                        className="border p-4 rounded flex gap-3 items-start bg-white shadow-sm"
                      >
                        {/* Gambar */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded flex-shrink-0"
                        />

                        {/* Detail Produk */}
                        <div className="flex-1 flex flex-col space-y-2">
                          <p className="font-medium Unbounded text-lg break-words">
                            {item.title}
                          </p>
                          <span className="text-gray-500 text-sm">
                            Rp{priceNum.toLocaleString("id-ID")}
                          </span>

                          {/* Kontrol Quantity */}
                          <div className="flex items-center gap-2">
                            <button
                              className="px-2 py-1 text-lg border rounded cursor-pointer"
                              onClick={() =>
                                handleQtyChange(
                                  item.Id,
                                  Math.max(1, quantity - 1),
                                )
                              }
                            >
                              -
                            </button>
                            <span className="px-3">{quantity}</span>
                            <button
                              className="px-2 py-1 text-lg border rounded cursor-pointer"
                              onClick={() =>
                                handleQtyChange(item.Id, quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>

                          {/* Subtotal */}
                          <span className="text-sm font-semibold text-gray-700">
                            Subtotal: Rp{itemSubtotal.toLocaleString("id-ID")}
                          </span>

                          {/* Delete */}
                          <button
                            className="mt-2 text-red-500 Unbounded hover:text-red-700 cursor-pointer text-sm self-start"
                            onClick={() => handleRemove(item.Id)}
                          >
                            ✕ Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Cart Total */}
            <div className="w-full lg:w-1/4 lg:sticky top-24 self-start">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Cart Total
                </h2>

                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span className="Unbounded">Subtotal:</span>
                    <span className="Unbounded font-medium">
                      Rp{subtotal.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="Unbounded">Estimated Delivery</span>
                    <span className="Unbounded font-medium text-green-600">
                      Free
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="Unbounded">Estimated Taxes:</span>
                    <span className="Unbounded font-medium">
                      Rp{estimatedTaxes.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex justify-between font-bold border-t border-gray-300 pt-4 text-lg">
                    <span className="Unbounded">Total</span>
                    <span className="Unbounded text-[var(--prim-color)]">
                      Rp{(subtotal + estimatedTaxes).toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>

                <button className="w-full py-3 mt-3 font-semibold text-white text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 transition-all duration-300 ease-in-out text-sm rounded-b-xl flex items-center justify-center gap-2">
                 <Link href="/UI-Components/Pages/checkout">Proceed to Checkout</Link> 
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
