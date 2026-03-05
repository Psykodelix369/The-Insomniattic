// app/page.tsx
import Image from "next/image";
import Starfield from "../components/Starfield";
import Moon from "../components/Moon";

export default function Page() {
  return (
    <main className="hero">
      {/* Background layers */}
      <Starfield />
      <Moon />

      {/* Foreground content */}
      <div className="heroContent">
        <div className="logoGlowWrap">
  <img
    src="/insomniattic-head-logo.png"
    alt="The Insomniattic Logo"
    className="logoGlow"
  />
</div>
        <h1 className="heroTitle">THE INSOMNIATTIC</h1>

        <p className="heroTagline">
          A place for those unwillingly addicted to insomnia.
        </p>
      </div>
    </main>
  );
}