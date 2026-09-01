import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Biddyasetu — Adarsha High School Alumni",
    template: "%s | Biddyasetu",
  },
  description:
    "Biddyasetu is a non-profit voluntary alumni organization of Adarsha High School, Kaitola — connecting alumni, supporting students, and building a better future through education and community.",
  keywords: ["Biddyasetu", "Adarsha High School", "Kaitola", "Alumni", "Scholarship", "Bangladesh"],
  openGraph: {
    title: "Biddyasetu — Adarsha High School Alumni",
    description: "Connecting Alumni, Empowering Students, Building a Better Future.",
    type: "website",
    locale: "en_BD",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
