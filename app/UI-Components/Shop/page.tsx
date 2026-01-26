import { Suspense } from "react";
import ShopClient from "./ShopClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading Shop...</div>}>
      <ShopClient />
    </Suspense>
  );
}