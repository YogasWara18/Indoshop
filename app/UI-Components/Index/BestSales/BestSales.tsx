"use client";

import Image from "next/image";
import Link from "next/link";

import bestSaleBanner from "@/public/BestSales/BestSales-banner.png"

import products from "@/app/JsonData/BestSales.json";

export default function BestSales() {

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="title my-4 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
          <h1 className="text-5xl Unbounded">Best Sales</h1>
        </div>
      </div>
    </>
  );
}
