import type { Metadata } from "next";
import "@/ui/styles/globals.scss";

export const metadata: Metadata = {
  title: "Pedidos",
  description: "Order what you want to buy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
