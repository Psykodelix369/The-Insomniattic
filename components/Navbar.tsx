
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{position:"fixed", top:0, width:"100%", padding:"1rem 2rem", background:"rgba(0,0,0,.4)"}}>
      <Link href="/">The Insomniattic</Link>{" | "}
      <Link href="/blog">Blog</Link>{" | "}
      <Link href="/portfolio">Portfolio</Link>{" | "}
      <Link href="/about">About</Link>
    </nav>
  );
}
