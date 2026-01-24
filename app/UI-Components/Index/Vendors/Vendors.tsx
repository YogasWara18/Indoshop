"use client";

import Image from "next/image";
import vendorsData from "@/app/JsonData/Vendors.json";

export default function Vendors() {
  return (
    <div className="px-[8%] lg:px-[12%] py-16 bg-gray-50">
     <div className="title my-4 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
          <h1 className="text-5xl Unbounded font-bold tracking-tight">
            Top Seller & Best Deals
          </h1>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {vendorsData.map((vendor) => (
          <div
            key={vendor.id}
            className="vendor-card relative rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 cursor-pointer border border-transparent flex flex-col items-center text-center bg-gradient-to-br from-[var(--prim-color)] to-white"
          >
            {/* Logo Vendor */}
            <Image
              src={vendor.vendorMain}
              alt={vendor.title}
              width={120}
              height={120}
              className="object-contain rounded-full border border-white shadow-lg bg-white p-5"
            />

            {/* Info Vendor */}
            <h2 className="mt-6 text-xl font-semibold text-gray-900 hover:text-[var(--prim-color)] transition-all">
              {vendor.title}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{vendor.time}</p>

            {/* Voucher Badge */}
            <div className="mt-6">
              <button
                className="px-6 py-2 rounded-full text-base font-semibold text-white 
               bg-[var(--prim-color)] shadow-md 
               hover:bg-white hover:text-[var(--prim-color)] hover:shadow-lg 
               transition-all duration-300 cursor-pointer"
              >
                {vendor.off}
              </button>
            </div>

            {/* Tagline */}
            <p className="mt-6 text-gray-700 text-base italic">
              Gunakan voucher sekarang & nikmati penawaran terbaik!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
