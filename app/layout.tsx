import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // CRITICAL IMPORT

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexora - Academic Management",
  description: "Unified academic management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={inter.className} 
        style={{ backgroundColor: "#0B0B0B", color: "#FFFFFF", margin: 0, minHeight: "100vh" }}
      >
        {children}
      </body>
    </html>
  );
}
