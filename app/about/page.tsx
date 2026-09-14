// app/about/page.tsx
import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pageWrap">
        <h1 className="pageTitle">About</h1>
        <p className="pageIntro">
          The story behind The Insomniattic, and where it&rsquo;s headed.
        </p>

        <div className="comingSoonBlock">
          This section is still under construction. Check back soon.
        </div>
      </div>
    </>
  );
}
