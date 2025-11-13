import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KKC Event - 360° Marketing Agency in East Malaysia",
  description: "Creative, strategic, and impactful marketing solutions across Sabah, Sarawak, and Labuan. Event management, branding, digital marketing, and creative production.",
  keywords: "marketing agency, East Malaysia, Sabah, Sarawak, event management, digital marketing, branding, Kota Kinabalu",
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
