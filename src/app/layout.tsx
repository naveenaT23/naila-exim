import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nailaexim.com"),
  title: "Naila Exim | Delivering Trust Globally",
  description: "Specializing in sourcing and trade consulting for European and Asian markets. We connect farming partners in India with clients worldwide.",
  icons: {
    icon: "/fav-icon.jpg",
    apple: "/fav-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
