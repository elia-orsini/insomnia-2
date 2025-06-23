import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from "next";
import localFont from "next/font/local";

const NeueHaasUnicaW1G = localFont({ src: "./NeueHaasUnicaW1G-Bold.woff2" });

export const metadata: Metadata = {
  title: "IN$0MN1A Events",
  description:
    "IN$0MN1A (INSOMNIA) Events is music, events and culture. Find us this summer at Coco Beach in Lonato del Garda. To enter our world, join our parties. Find more info on our socials.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "IN$0MN1A Events",
    url: "https://insomniaevents.xyz",
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
      <body
        className={`no-scrollbar cursor-cell overflow-clip antialiased ${NeueHaasUnicaW1G.className}`}
      >
        {children}
      </body>
    </html>
  );
}
