import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "¿Neta qué les cuesta?",
  icons: "/logoPan.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
