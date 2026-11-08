import type { Metadata, Viewport } from "next";
import { EB_Garamond, Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";

// ✅ Copyright DIKEMBALIKAN KE SINI
import Copyright from "./Components/Footer/Copyright"; 
import { Toaster } from "react-hot-toast";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-ebGaramond",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// =========================================================
// KONFIGURASI SEO & MEDIA SOSIAL (SHARE LINK)
// =========================================================
// ✅ PERBAIKAN: Memastikan URL selalu valid dan tidak memicu error TypeScript/Runtime
const baseUrlString = process.env.NEXT_PUBLIC_SITE_URL || "https://indoshop.vercel.app";
const validBaseUrl = baseUrlString.startsWith("http") ? baseUrlString : `https://${baseUrlString}`;

export const metadata: Metadata = {
  // ✅ PERBAIKAN: Menggunakan URL yang sudah divalidasi
  metadataBase: new URL(validBaseUrl),
  
  title: {
    default: "Indoshop Art Market | Karya Seni & Kriya Lokal Premium",
    template: "%s | Indoshop Art Market",
  },
  description: "Temukan koleksi patung, batik, rotan, dan karya seni eksklusif lainnya dari pengrajin lokal Indonesia. Kualitas premium, harga terbaik.",
  keywords: ["seni indonesia", "kriya lokal", "beli patung", "batik premium", "art market", "indoshop"],
  authors: [{ name: "T. Kurnia Yogas Wara" }],
  creator: "Indoshop Art Market",
  
  // Konfigurasi OpenGraph (WhatsApp/FB/LinkedIn)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: validBaseUrl,
    title: "Indoshop Art Market | Karya Seni & Kriya Lokal Premium",
    description: "Temukan koleksi patung, batik, rotan, dan karya seni eksklusif lainnya dari pengrajin lokal Indonesia.",
    siteName: "Indoshop Art Market",
    images: [
      {
        url: "/logo.png", // ⚠️ Pastikan file logo.png ada di folder public
        width: 1200,
        height: 630,
        alt: "Indoshop Art Market Logo",
      },
    ],
  },

  // Konfigurasi Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Indoshop Art Market | Karya Seni & Kriya Lokal Premium",
    description: "Temukan koleksi patung, batik, rotan, dan karya seni eksklusif dari pengrajin lokal Indonesia.",
    images: ["/logo.png"], // ⚠️ Pastikan file logo.png ada di folder public
  },

  // Ikon Website (Favicon)
  icons: {
    icon: "/favicon.ico", 
    apple: "/logo.png", 
  },

  // Konfigurasi Robots (SEO)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Konfigurasi Viewport (Warna Tema Browser)
export const viewport: Viewport = {
  themeColor: "#fa2415",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${ebGaramond.variable} antialiased bg-[#F8F9FA]`}
      >
        
        {children}
      
        {/* ✅ Copyright DITAMPILKAN DI SINI */}
        <Copyright />

        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}