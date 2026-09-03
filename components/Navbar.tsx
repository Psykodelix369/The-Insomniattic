import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navBrand">The Insomniattic</Link>
      <Link href="/blog" className="navLink">Blog</Link>
      <Link href="/portfolio" className="navLink">Portfolio</Link>
      <Link href="/about" className="navLink">About</Link>
    </nav>
  );
}
