import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand brand-footer">
            <span className="brand-mark" aria-hidden="true">ph</span>
            <span className="brand-copy">
              <span className="brand-kicker">YOUR NEXT CHAPTER</span>
              <span className="brand-name">Study in <span>Philippines</span></span>
            </span>
          </Link>
          <p>A thoughtful place to start exploring education and everyday life across the Philippine islands.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/courses">Courses</Link>
          <Link href="/universities">Universities</Link>
          <Link href="/cities">Student cities</Link>
          <Link href="/student-life">Student life</Link>
          <Link href="/media">Campus stories</Link>
        </div>
        <div className="footer-column">
          <h2>Plan with care</h2>
          <Link href="/course-finder">Course finder</Link>
          <Link href="/mbbs-md">Medicine &amp; MD</Link>
          <Link href="/visa">Visa information</Link>
          <Link href="/parent-zone">For parents</Link>
          <Link href="/contact">Talk to us <ArrowUpRight size={14} /></Link>
        </div>
        <div className="footer-note">
          <span className="footer-note-icon"><ShieldCheck size={19} /></span>
          <h2>Check every detail.</h2>
          <p>Requirements, recognition and fees can change. Confirm them with official sources before making decisions.</p>
          <Link href="/verify">Visit the verification centre <ArrowUpRight size={15} /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Study in Philippines. An independent information portal.</span>
          <span>Explore with curiosity. Decide with confidence.</span>
        </div>
      </div>
    </footer>
  );
}
