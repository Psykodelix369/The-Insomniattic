// app/portfolio/page.tsx
import Navbar from "../../components/Navbar";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <div className="pageWrap">
        <h1 className="pageTitle">Portfolio</h1>
        <p className="pageIntro">
          A growing collection of work born from sleepless nights.
        </p>

        <div className="comingSoonBlock">
          This section is still under construction. Check back soon.
        </div>
      </div>
    </>
  );
}
