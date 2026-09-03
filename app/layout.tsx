// app/layout.tsx
import "./globals.css";
import { Fredoka } from "next/font/google";
import Starfield from "../components/Starfield";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-neon",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body>
        <div className="siteBackground" aria-hidden="true">
          <Starfield />
        </div>
        {children}
      </body>
    </html>
  );
}
