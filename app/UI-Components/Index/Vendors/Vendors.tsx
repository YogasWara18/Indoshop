"use client";

import Image from "next/image";
import Link from "next/link";
import vendorsData from "@/app/JsonData/Vendors.json";

export default function Vendors() {
  return (
    <div className="px-[8%] lg:px-[12%] py-16 bg-[#fdf6ec]">
      {/* Title */}
      <div className="title my-4 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <h1 className="text-5xl Unbounded font-bold tracking-tight text-[var(--prim-color)]">
          Top Seller & Best Deals
        </h1>
      </div>

      {/* Vendor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {vendorsData.map((vendor) => (
          <div
            key={vendor.id}
            className="vendor-card relative rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 cursor-pointer border border-[var(--prim-light)]/40 flex flex-col items-center text-center bg-white/40 backdrop-blur-md"
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

            {/* Voucher Button */}
            <div className="mt-6 w-full">
              <Link
                href="/UI-Components/Shop"
                className="EB_Garamond w-full px-6 py-3 font-semibold 
                           text-white text-[var(--white-color)] bg-[var(--prim-color)] 
                           shadow-[0_0_15px_var(--prim-light)] 
                           hover:bg-[var(--white-color)] hover:text-[var(--prim-color)] 
                           hover:shadow-[0_0_25px_var(--prim-light)] 
                           transition-all duration-[var(--transition-regular)] 
                           cursor-pointer backdrop-blur-md border border-[var(--prim-light)]/40 
                           text-sm rounded-md flex items-center justify-center gap-2"
              >
                <i className="bi bi-cart3"></i> {vendor.off}
              </Link>
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