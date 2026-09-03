// app/page.tsx
import Starfield from "../components/Starfield";
import Moon from "../components/Moon";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <main className="hero">
      {/* Background layers */}
      <Starfield />
      <Moon />

      {/* Nav bar */}
      <Navbar />

      {/* Foreground content */}
      <div className="heroContent">
        <img
          src="/insomniattic-head-logo.png"
          alt="The Insomniattic logo"
          className="heroLogo"
          draggable={false}
        />
        <h1 className="heroTitle">THE INSOMNIATTIC</h1>
        <p className="heroTagline">
          A place for those unwillingly addicted to insomnia.
        </p>
      </div>
    </main>
  );
}
