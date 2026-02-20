import Starfield from "../components/Starfield";

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-zinc-950 overflow-hidden">
      
      {/* Star background */}
      <Starfield />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="neon-glass">
          The Insomniattic
        </h1>

        <p className="mt-6 text-zinc-400 tracking-wide">
          A place for those unwillingly addicted to insomnia.
        </p>
      </div>

    </main>
  );
}