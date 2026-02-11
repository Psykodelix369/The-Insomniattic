
import Starfield from "../components/Starfield";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "8rem 2rem", position: "relative" }}>
      <Starfield />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>The Insomniattic</h1>
        <p>A place for those unwillingly addicted to insomnia.</p>
      </div>
    </main>
  );
}
