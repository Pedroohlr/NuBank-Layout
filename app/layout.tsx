import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/AppBar";
import localFont from "next/font/local";

const graphik = localFont({
  variable: "--font-graphik",
  display: "swap",
  src: [
    { path: "../public/fonts/Graphik-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Graphik-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Graphik-Semibold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Graphik-Bold.ttf",     weight: "700", style: "normal" },
    // ...
  ],
});

export const metadata: Metadata = {
  title: "NuBank",
  description: "Layout do aplicativo da NuBank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${graphik.variable} bg-primary`}>
        <main>
          {children}
          <AppBar />
        </main>
      </body>
    </html>
  );
}
