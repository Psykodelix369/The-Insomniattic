// app/layout.tsx
import type { Metadata } from "next";
import { Tilt_Neon } from "next/font/google";
import "./globals.css";

const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
  variable: "--font-tilt-neon",
});

export const metadata: Metadata = {
  title: "The Insomniattic",
  description: "A place for those unwillingly addicted to insomnia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={tiltNeon.variable}>
      <body>{children}</body>
    </html>
  );
}