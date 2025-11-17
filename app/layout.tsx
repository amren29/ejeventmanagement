import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pentas Wijaya - Premier Event Management & Marketing Agency",
  description: "Premier event management and marketing solutions in Malaysia. Specializing in event planning, corporate events, digital marketing, branding, and creative production.",
  keywords: "event management, marketing agency, Malaysia, event planning, corporate events, digital marketing, branding, Pentas Wijaya",
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
