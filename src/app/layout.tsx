import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/componetes/header";

import { AuthProvider } from "@/providers/auth";
import RouteLoader from "@/componetes/loaingglobal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mundo de Contos!",
  description: "historias infantis de um jeito diferente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
      >
      <AuthProvider> 
        <Header/>
        {children}
      </AuthProvider>   

      </body>
    </html>
  );
}
