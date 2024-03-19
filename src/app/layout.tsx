
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

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
      <body>
        <Header />
        <div className={`${inter.className} fade-in`}  style={{ animationDelay: `1.5s` }}>
      {children}
      </div>
      <footer className="h-40 mt-20  bottom-0 gap-8"> 
      <h2>Alma</h2>
      <a href="https://www.vadstein.dev/">Made by Håkon Vadstein</a>
      </footer>
      </body>
    </html>
  );
}
