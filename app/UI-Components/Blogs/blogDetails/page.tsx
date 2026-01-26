import { Suspense } from "react";
import BlogDetailsClient from "./BlogDetailsClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading Blog Details...</div>}>
      <BlogDetailsClient />
    </Suspense>
  );
}