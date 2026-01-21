"use client"

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
        
    })

  return (
    <div>
      
    </div>
  )
}
