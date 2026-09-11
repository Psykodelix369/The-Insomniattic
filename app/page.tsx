// app/page.tsx
import Moon from "../components/Moon";
import Navbar from "../components/Navbar";

const TITLE = "THE INSOMNIATTIC";

// Hand-varied timing per letter (not truly random, to avoid SSR/client
// hydration mismatches) so each letter flickers at its own speed/offset -
// some fast, some slow, a few dimmer than others like weak old bulbs.
const LETTER_TIMING = [
  { duration: 4.2, delay: 0.0, max: 1.0 },
  { duration: 7.1, delay: 1.6, max: 0.85 },
  { duration: 3.3, delay: 3.4, max: 1.0 },
  { duration: 8.4, delay: 0.9, max: 0.9 },
  { duration: 5.0, delay: 2.2, max: 1.0 },
  { duration: 3.8, delay: 4.5, max: 0.8 },
  { duration: 6.5, delay: 1.1, max: 1.0 },
  { duration: 4.7, delay: 3.0, max: 0.95 },
  { duration: 7.8, delay: 0.5, max: 0.85 },
  { duration: 3.6, delay: 2.7, max: 1.0 },
  { duration: 5.5, delay: 4.0, max: 0.9 },
  { duration: 8.0, delay: 1.3, max: 1.0 },
  { duration: 4.0, delay: 3.6, max: 0.82 },
  { duration: 6.9, delay: 0.2, max: 1.0 },
  { duration: 3.4, delay: 2.9, max: 0.95 },
  { duration: 5.3, delay: 4.3, max: 1.0 },
];

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="hero">
        <Moon />

        <div className="heroContent">
          <h1 className="heroTitle">
            {TITLE.split("").map((ch, i) => {
              if (ch === " ") {
                return <span key={i}>&nbsp;</span>;
              }
              const t = LETTER_TIMING[i % LETTER_TIMING.length];
              return (
                <span
                  key={i}
                  className="heroLetter"
                  style={
                    {
                      animationDuration: `${t.duration}s`,
                      animationDelay: `-${t.delay}s`,
                      "--letter-max": t.max,
                    } as React.CSSProperties
                  }
                >
                  {ch}
                </span>
              );
            })}
          </h1>
          <img
            src="/insomniattic-head-logo.png"
            alt="The Insomniattic logo"
            className="heroLogo"
            draggable={false}
          />
        </div>
      </main>

      <section className="pitch">
        <p className="pitchIntro">
          The Insomniattic a place for those unwillingly addicted to insomnia.
        </p>
        <p className="pitchText">
          A spot to write, share, collaborate and simply exist alongside
          other Insomniaddicts who understand exactly why the ceiling looks
          so interesting at 3am. Absolutely no pressure to sleep here, just
          some great conversations, creativity and the quiet companionship
          of other like minded Insomniaddicts.
        </p>
        <p className="pitchClose">
          Remember...
          <span className="pitchCloseLine">
            The lights may be dim, but you&rsquo;re not alone.
          </span>
        </p>
        <a href="#teaser" className="ctaButton">
          Step Into the Attic
        </a>
      </section>

      <section id="teaser" className="teaserSection">
        <h2 className="teaserHeading">What&rsquo;s Brewing</h2>
        <div className="teaserGrid">
          <a href="/blog" className="teaserCard">
            <h3 className="teaserCardTitle">Blog</h3>
            <p className="teaserCardDesc">
              Late-night writing and hundreds of poems, finding their way
              here soon.
            </p>
            <span className="comingSoonTag">Coming Soon</span>
          </a>

          <a href="/portfolio" className="teaserCard">
            <h3 className="teaserCardTitle">Portfolio</h3>
            <p className="teaserCardDesc">
              A growing collection of work born from sleepless nights.
            </p>
            <span className="comingSoonTag">Coming Soon</span>
          </a>

          <a href="/about" className="teaserCard">
            <h3 className="teaserCardTitle">About</h3>
            <p className="teaserCardDesc">
              The story behind The Insomniattic, and where it&rsquo;s headed.
            </p>
            <span className="comingSoonTag">Coming Soon</span>
          </a>
        </div>
      </section>
    </>
  );
}
