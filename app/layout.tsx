import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rwepas Secondary School | Premier Secondary School in Kahama",
  description: "Discover Rwepas Secondary School — a world-class secondary school in Kahama, Tanzania. Rooted in values, rising to excellence. Nurturing leaders of character, intellect, and purpose.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FAFAF8] text-[#232321] font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}