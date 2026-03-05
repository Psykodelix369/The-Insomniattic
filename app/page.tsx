// app/page.tsx
import Starfield from "../components/Starfield";

export default function Page() {
  return (
    <main className="hero">
      {/* Background layer */}
      <Starfield />

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