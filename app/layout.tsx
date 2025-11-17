import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pentas Wijaya - 360° Marketing Agency in Malaysia",
  description: "Malaysia's premier 360° marketing agency. Comprehensive solutions including event management, digital marketing, branding, activations, creative production, and more.",
  keywords: "360 marketing agency, marketing agency, Malaysia, event management, digital marketing, branding, activations, creative production, Pentas Wijaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
