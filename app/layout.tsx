import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/AppBar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
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
      <body className={poppins.className}>
        <main>
          {children}
          <AppBar />
        </main>
      </body>
    </html>
  );
}
