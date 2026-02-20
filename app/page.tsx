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
        background: "#09090b", // zinc-950-ish
        overflow: "hidden",
      }}
    >
      <Starfield />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <h1 className="neon-glass">The Insomniattic</h1>
        <p
  style={{
    marginTop: "1.5rem",
    color: "#9ca3af",
    letterSpacing: "0.08em",
    fontSize: "0.95rem"
  }}
>
  A place for those unwillingly addicted to insomnia.
</p>