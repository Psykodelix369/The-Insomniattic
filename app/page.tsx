// app/page.tsx
import Moon from "../components/Moon";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="hero">
        <Moon />

        <div className="heroContent">
          <img
            src="/insomniattic-head-logo.png"
            alt="The Insomniattic logo"
            className="heroLogo"
            draggable={false}
          />
          <h1 className="heroTitle">THE INSOMNIATTIC</h1>
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
          And remember&hellip;
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
