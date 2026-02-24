import "./globals.css";
import { Rubik_Glitch } from "next/font/google";

const glitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-neon",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={glitch.variable}>
      <body>{children}</body>
    </html>
  );
}