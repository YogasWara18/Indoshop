"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartItem = {
  Id: string;
  name: string;
  title: string;
  price: string;
  review: string;
  qty?: number;
  image: string;
};

export default function Checkout() {
  const [deliveryOption, setDeliveryOption] = useState<"ship" | "pickup">(
    "ship",
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(saveCart);
  }, []);

  const handlePlaceOrder = () => {
    toast.success("Order Placed Successfully!");
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9]/g, "")) || 0;
    const quantity = item.qty ?? 1;
    return acc + price * quantity;
  }, 0);

  const estimatedTax = totalPrice * 0.1;

  return (
    <>
      {/* Header */}
      <div className="px-[8%] lg:px-[12%] bg-[var(--prim-light)] py-6 shadow">
        <div className="flex justify-between items-center">
          <h2 className="Unbounded text-2xl font-bold">Checkout</h2>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>:</span>
            <span className="text-[var(--prim-color)] font-semibold">
              Checkout
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      {/* Content */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact */}
            <section>
              <h5 className="mb-3 Unbounded text-xl font-semibold">Contact</h5>
              <input
                type="email"
                className="border border-gray-300 rounded w-full p-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none mb-3"
                placeholder="Email or Mobile Phone number"
              />
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" id="newsCheck" />
                Email me with news and offers
              </label>
            </section>

            {/* Delivery */}
            <section>
              <h5 className="mb-3 Unbounded text-xl font-semibold">Delivery</h5>
              <div className="flex gap-6 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryoption"
                    checked={deliveryOption === "ship"}
                    onChange={() => setDeliveryOption("ship")}
                  />
                  Ship
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryoption"
                    checked={deliveryOption === "pickup"}
                    onChange={() => setDeliveryOption("pickup")}
                  />
                  Pickup in store
                </label>
              </div>

              {deliveryOption === "ship" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <select className="border border-gray-300 rounded px-3 py-2 md:col-span-2 focus:ring-2 focus:ring-[var(--prim-color)] outline-none">
                    <option>Jakarta</option>
                    <option>Medan</option>
                    <option>Yogyakarta</option>
                    <option>Palembang</option>
                    <option>Bandung</option>
                  </select>
                  <input
                    type="text"
                    className="border border-gray-300 rounded p-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                    placeholder="First Name (Optional)"
                  />
                  <input
                    type="text"
                    className="border border-gray-300 rounded p-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                    placeholder="Last Name"
                  />
                </div>
              )}

              {deliveryOption === "pickup" && (
                <div className="my-4 p-4 border rounded bg-red-50 text-red-700">
                  <strong>No stores available with your item</strong>
                  <div>
                    <Link href="#" className="underline">
                      Ship to address
                    </Link>{" "}
                    instead
                  </div>
                </div>
              )}

              <input
                type="text"
                className="border border-gray-300 rounded p-3 w-full mb-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                placeholder="Address"
              />
              <input
                type="text"
                className="border border-gray-300 rounded p-3 w-full mb-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                placeholder="Apartment, suite, etc (Optional)"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <input
                  type="text"
                  className="border border-gray-300 rounded p-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                  placeholder="City"
                />
                <input
                  type="text"
                  className="border border-gray-300 rounded p-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                  placeholder="Postal code (Optional)"
                />
              </div>

              <label className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <input type="checkbox" id="saveInfo" />
                Save this information for next time
              </label>
            </section>

            {/* Shipping Method */}
            <section>
              <h5 className="mb-3 Unbounded text-xl font-semibold">
                Shipping Method
              </h5>
              <div className="p-4 flex justify-between items-center border rounded bg-blue-50">
                <span>Standard</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
            </section>

            {/* Payment */}
            <section>
              <h4 className="mt-6 mb-3 Unbounded text-xl font-semibold">
                Payment
              </h4>
              <p className="text-gray-500">
                Select your preferred payment method at the next step.
              </p>
              <div className="border border-gray-300 rounded p-4 mb-3 space-y-3">
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                  placeholder="Card Number"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    className="border border-gray-300 rounded w-full p-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                    placeholder="Expiration date (MM / YY)"
                  />
                  <input
                    type="text"
                    className="border border-gray-300 rounded w-full p-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                    placeholder="Security Code"
                  />
                </div>
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-3 focus:ring-2 focus:ring-[var(--prim-color)] outline-none"
                  placeholder="Name on card"
                />
              </div>
              <button
                className="EB_Garamond w-full py-3 mt-3 font-semibold text-white text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 transition-all duration-300 ease-in-out text-sm rounded-b-xl flex items-center justify-center gap-2"
                onClick={handlePlaceOrder}
              >
                Pay Now
              </button>
            </section>
          </div>

          {/* Right Order Summary */}
          <div className="lg:col-span-5 lg:sticky top-24 self-start">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>

              {/* Order Images */}
              <div className="space-y-3 mb-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border-b pb-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold text-gray-700">
                      Rp{item.price.toLocaleString("id-ID")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    Rp{totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Tax (10%)</span>
                  <span className="font-medium">
                    Rp{estimatedTax.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex justify-between font-bold border-t pt-3 text-lg">
                  <span>Total</span>
                  <span className="text-[var(--prim-color)] Unbounded">
                    Rp{(totalPrice + estimatedTax).toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="EB_Garamond w-full py-3 mt-3 font-semibold text-white text-[var(--white-color)] bg-[var(--prim-color)] shadow-[0_0_15px_var(--prim-light)] hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] hover:shadow-[0_0_25px_var(--prim-light)] transition-all duration-[var(--transition-regular)] cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 transition-all duration-300 ease-in-out text-sm rounded-b-xl flex items-center justify-center gap-2"
              >
                Place Order
              </button>
              <Link
                href="/UI-Components/Pages/cart"
                className="EB_Garamond w-full py-3 font-semibold text-[var(--prim-color)] bg-[var(--white-color)] border border-[var(--prim-light)]/40 hover:bg-[var(--prim-light)] hover:text-[var(--white-color)] hover:shadow-[0_0_20px_var(--prim-light)] transition-all duration-300 ease-in-out text-sm rounded-xl flex items-center justify-center gap-2"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
