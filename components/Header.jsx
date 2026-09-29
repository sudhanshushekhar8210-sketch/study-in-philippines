"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, Search, ShieldCheck, X } from "lucide-react";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/universities", label: "Universities" },
  { href: "/mbbs-md", label: "Medicine" },
  { href: "/student-life", label: "Student life" },
  { href: "/cities", label: "Explore the islands" },
  { href: "/relations", label: "India–Philippines" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Study in the Philippines home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">ph</span>
          <span className="brand-copy">
            <span className="brand-kicker">YOUR NEXT CHAPTER</span>
            <span className="brand-name">Study in <span>Philippines</span></span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/verify" className="header-trust-link"><ShieldCheck size={16} /> Verify first</Link>
          <Link href="/course-finder" className="btn btn-primary header-cta">Find your course <ArrowRight size={16} /></Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-navigation${menuOpen ? " is-open" : ""}`} hidden={!menuOpen}>
        <nav className="container mobile-nav-links" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}<ArrowRight size={16} />
            </Link>
          ))}
          <Link href="/verify" onClick={() => setMenuOpen(false)}><ShieldCheck size={17} /> Verify before you join</Link>
          <Link href="/course-finder" onClick={() => setMenuOpen(false)}><Search size={17} /> Find your course</Link>
        </nav>
      </div>
    </header>
  );
}
