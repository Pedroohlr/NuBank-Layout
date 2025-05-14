import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/AppBar";


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"]
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
      <body className={jakarta.className}>
        <main className="bg-primary">
          {children}
          <AppBar />
        </main>
      </body>
    </html>
  );
}
