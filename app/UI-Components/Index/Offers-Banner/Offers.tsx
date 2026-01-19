"use client";

import Image, { StaticImageData } from "next/image";

import Deal1 from "@/public/Offers-baner1.jpg";
import Deal2 from "@/public/Offers-baner2.jpg";

type DealItem = {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
};

const dealData: DealItem[] = [
  {
    image: Deal1,
    title: "Diskon Rp50.000 untuk pembelian pertama",
    description: "Kerajinan tangan Bali, dikirim sebelum jam 10 pagi",
  },
  {
    image: Deal2,
    title: "Gratis ongkir untuk order pertama",
    description: "Batik Jawa eksklusif, pengiriman cepat hari ini",
  },
];

export default function Offers() {
  return <div className="px-[8%] lg:px-[12%] mb-10">
    <div className="flex flex-col lg:flex-row gap-5">
        {dealData.map((deal, index) => (
            <div key={index} className={`offer-wrap px-5 py-6 rounded-2xl flex flex-col md:flex-row justify-between items-center ${deal.className || ""}`}>
                <div className="w-full lg:w-1/2 deal-image">
                    <Image src={deal.image} alt={deal.title} className=""/>
                </div>
                <div className="w-full lg:w-1/2 deal-info">
                    <h2 className="EB_Garamond font-bold text-white text-2xl leading-5 whitespace-pre-line">
                        {deal.title}
                    </h2>
                </div>
            </div>
        ))}
    </div>
  </div>;
}
