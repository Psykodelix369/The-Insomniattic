import "./globals.css";
import { Rubik_Burned } from "next/font/google";

const burned = Rubik_Burned({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-neon",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={burned.variable}>
      <body>{children}</body>
    </html>
  );
}