import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alma Getachew",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header>
        <Link href="/"><h1>Alma</h1></Link>
        </header>
      <main className={inter.className}>{children}</main>
      <footer></footer>
      </body>
    </html>
  );
}
