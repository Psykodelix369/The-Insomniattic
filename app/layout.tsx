import "./globals.css";
import { Monoton } from "next/font/google";

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-neon",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={monoton.variable}>
      <body>{children}</body>
    </html>
  );
}