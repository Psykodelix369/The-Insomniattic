import Starfield from "../components/Starfield";

function NeonTitle({ text }: { text: string }) {
  return (
    <h1 className="neon-sign" aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          className="neon-letter"
          style={{
            ["--d" as any]: `${(i * 0.17) % 2.3}s`,
            ["--t" as any]: `${3.4 + ((i * 0.13) % 2.2)}s`,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </h1>
  );
}

export default function Page() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#09090b",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      <Starfield />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <NeonTitle text="The Insomniattic" />

        <p
          style={{
            marginTop: "1.5rem",
            color: "#9ca3af",
            letterSpacing: "0.08em",
            fontSize: "0.95rem",
            lineHeight: 1.6,
          }}
        >
          A place for those unwillingly addicted to insomnia.
        </p>
      </div>
    </main>
  );
}