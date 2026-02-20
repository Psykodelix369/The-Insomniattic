import Starfield from "../components/Starfield";

export default function Page() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#09090b", // dark zinc-ish
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      {/* Star background (homepage only) */}
      <Starfield />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <h1 className="neon-sign">The Insomniattic</h1>

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