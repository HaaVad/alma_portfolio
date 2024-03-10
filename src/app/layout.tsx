import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alma Getachew",
  description: "Dancer, artist, loca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <div className="w-min mx-auto">
        <Link href="/" className=""><h1>Alma</h1></Link>
        </div>
        </header>
      {children}
      <footer className="h-40 mt-20  bottom-0 gap-8"> 
      <h2>Alma</h2>
      <a href="https://www.vadstein.dev/">Made by Håkon Vadstein</a>
      </footer>
      </body>
    </html>
  );
}
