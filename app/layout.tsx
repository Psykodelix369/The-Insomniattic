// app/layout.tsx
import "./globals.css";
import { Tilt_Neon } from "next/font/google";

const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
  variable: "--font-tilt-neon",
});

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