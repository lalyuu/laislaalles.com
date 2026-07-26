import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import CustomScrollbar from "@/components/CustomScrollbar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});

export const metadata: Metadata = {
  title: "Laísla Alles - Portfólio",
  description: "Portfólio da Laísla Alles, Designer Gráfica e Motion Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>
      <body id="page-scroll-content" className="min-h-screen overflow-x-hidden">
        {children}
        <CustomScrollbar />
      </body>
    </html>
  );
}
