import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "Insomnia Events",
  description:
    "Insomnia Events is music, events and culture. Find us this summer at Coco Beach in Lonato del Garda. To enter our world, join our parties. Find more info on our socials.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "/insomnia-logo-192.png",
        width: 2600,
        height: 2600,
        alt: "Insomnia Events",
      },
    ],
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`no-scrollbar cursor-cell overflow-clip antialiased`}>{children}</body>
    </html>
  );
}
