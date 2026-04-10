import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arnulfo D. Seneca Jr. | Senior Web Developer",
  description:
    "Portfolio of Arnulfo D. Seneca Jr., Senior Web Developer with 10+ years of experience in full-stack development, CMS, and eCommerce.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-[calc(100vh-56px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
