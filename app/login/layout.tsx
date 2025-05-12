import { Montserrat } from "next/font/google";
import '../globals.css'

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]
  });

export default function RootLayoutLogin({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <html lang="pt-br">
            <body className={montserrat.className}>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}