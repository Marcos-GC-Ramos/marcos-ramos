import type { Metadata } from "next";
import "/public/css/reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Ramos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='!text-[#94a3b8] bg-slate-900 leading-relaxed scroll-smooth' style={{ fontFamily: 'Inter'}}>
        {children}
      </body>
    </html>
  );
}
