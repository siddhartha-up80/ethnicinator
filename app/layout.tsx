import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EthnicInator India | Indian Ethnic Wear for men and women, Step into the elegance with ethnic inator",
  description:
    "Step into the Elegance with Ethnicinator, Ultimate destination for for luxurious indian fashion. We offer a wide range of Indian ethnic wear for men and women.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="wuKkVFD1dhs31EjQNk81yBbw-temshhMPPc8JGAUC94"
          />
        </Head>

        <meta
          name="google-site-verification"
          content="wuKkVFD1dhs31EjQNk81yBbw-temshhMPPc8JGAUC94"
        />

        <body className={inter.className}>
          <CartProvider>
            <Navbar />
            <ShoppingCartModal />
            {children}
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
