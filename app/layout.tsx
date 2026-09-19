// app/layout.tsx
import "./globals.css";
import { Playfair_Display, EB_Garamond, Space_Mono } from "next/font/google";
import Starfield from "../components/Starfield";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-header",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${ebGaramond.variable} ${spaceMono.variable}`}
    >
      <body>
        <div className="siteBackground" aria-hidden="true">
          <Starfield />
        </div>
        {children}
      </body>
    </html>
  );
}