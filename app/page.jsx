import Link from "next/link";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Compass, Globe2,
  GraduationCap, HeartHandshake, MapPin, ShieldCheck, Sparkles, UsersRound,
} from "lucide-react";
import { cities, courses, universities } from "@/data/site";
import { CourseCard } from "@/components/CourseCard";
import { SectionTitle } from "@/components/SectionTitle";
import { UniversityCard } from "@/components/UniversityCard";
import { VerifyPanel } from "@/components/VerifyPanel";

const highlights = [
  { icon: BookOpen, title: "Find your direction", text: "Explore study pathways, from healthcare and technology to business and the creative industries.", href: "/courses", link: "Explore courses" },
  { icon: Compass, title: "Get to know the place", text: "Discover the cities, culture and day-to-day details that shape student life across the islands.", href: "/cities", link: "Explore the islands" },
  { icon: ShieldCheck, title: "Make informed choices", text: "Use practical checklists and follow official sources when checking important details.", href: "/verify", link: "Visit the trust centre" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="hero-kicker-dot" /> A NEW PERSPECTIVE ON STUDYING ABROAD</div>
            <h1>Make room<br />for <em>what’s next.</em></h1>
            <p className="hero-description">Explore education, discover the Philippines and find the information to shape your own next chapter.</p>
            <div className="hero-actions">
              <Link href="/course-finder" className="btn btn-primary btn-large">Find your course <ArrowRight size={17} /></Link>
              <Link href="/universities" className="hero-secondary-link">Explore universities <ArrowUpRight size={17} /></Link>
            </div>
          </div>
          <div className="hero-caption">
            <span className="hero-caption-rule" />
            <span>THE PHILIPPINES</span>
            <span className="hero-caption-separator">/</span>
            <span>YOUR NEXT CHAPTER</span>
          </div>
          <a className="hero-scroll" href="#discover" aria-label="Scroll to discover">
            <span>SCROLL TO DISCOVER</span><ArrowDown size={15} />
          </a>
        </div>
        <div className="hero-side-note">7,000+ ISLANDS · COUNTLESS WAYS FORWARD</div>
      </section>

      <section className="trust-strip" aria-label="Portal highlights">
        <div className="container trust-strip-inner">
          <div><span className="trust-strip-icon"><Globe2 size={18} /></span><span>Explore a country, not just a campus</span></div>
          <div><span className="trust-strip-icon"><GraduationCap size={19} /></span><span>Compare study pathways</span></div>
          <div><span className="trust-strip-icon"><ShieldCheck size={18} /></span><span>Always verify official information</span></div>
        </div>
      </section>

      <section className="section discover-section" id="discover">
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle eyebrow="A place to begin" title={<>Big plans.<br /><span className="text-accent">Clearer next steps.</span></>} description="Start with what matters to you. Explore your options at your own pace, with practical guidance along the way." />
            <Link href="/courses" className="text-link section-heading-link">Explore all courses <ArrowUpRight size={17} /></Link>
          </div>
          <div className="grid-auto course-grid">{courses.slice(0, 6).map((course, index) => <CourseCard key={course.slug} course={course} index={index} />)}</div>
          <div className="finder-banner">
            <div className="finder-banner-icon"><Sparkles size={21} /></div>
            <div><span className="finder-banner-kicker">A GOOD FIRST QUESTION</span><h3>Not sure where to start?</h3><p>Share your interests with the course finder and explore a few possible directions.</p></div>
            <Link href="/course-finder" className="btn btn-dark">Try the course finder <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section essence-section">
        <div className="container">
          <div className="essence-intro">
            <div><div className="eyebrow eyebrow-light">More than a destination</div><h2 className="h2">A bigger picture<br />makes a better start.</h2></div>
            <p>Choosing where to study is also choosing where to grow. Get to know the opportunities, people and everyday experiences beyond the prospectus.</p>
          </div>
          <div className="essence-grid">{highlights.map(({ icon: Icon, title, text, href, link }, index) => (
            <article className="essence-card" key={title}>
              <span className="essence-index">0{index + 1}</span>
              <span className="essence-icon"><Icon size={21} strokeWidth={1.7} /></span>
              <h3>{title}</h3><p>{text}</p>
              <Link href={href} className="essence-link">{link}<ArrowRight size={15} /></Link>
            </article>
          ))}</div>
        </div>
      </section>

      <section className="section universities-section">
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle eyebrow="Find your fit" title={<>A university is<br /><span className="text-accent">more than a name.</span></>} description="Explore institution profiles and the details that deserve a closer look before you make a decision." />
            <Link href="/universities" className="text-link section-heading-link">Browse directory <ArrowUpRight size={17} /></Link>
          </div>
          <div className="grid-auto university-grid">{universities.map((university) => <UniversityCard key={university.slug} u={university} />)}</div>
          <p className="listing-disclaimer"><ShieldCheck size={15} /> Directory examples are illustrative. Verify institution and programme information with official sources.</p>
        </div>
      </section>

      <section className="life-feature">
        <div className="life-feature-image" role="img" aria-label="Tropical landscape in the Philippines" />
        <div className="life-feature-content">
          <div className="eyebrow">Beyond the lecture hall</div>
          <h2 className="h2">A different kind<br />of everyday.</h2>
          <p>From finding your feet in a new city to discovering food, community and weekend escapes, life abroad is made of the little things too.</p>
          <Link href="/student-life" className="btn btn-light">Get to know student life <ArrowRight size={16} /></Link>
          <div className="life-feature-coordinates">09° 18&apos; N&nbsp;&nbsp; 123° 18&apos; E</div>
        </div>
      </section>

      <section className="section places-section">
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle eyebrow="Somewhere to begin" title={<>Every city has<br /><span className="text-accent">its own rhythm.</span></>} description="Get a feel for the places students call home, from lively urban centres to quieter highland communities." />
            <Link href="/cities" className="text-link section-heading-link">See all cities <ArrowUpRight size={17} /></Link>
          </div>
          <div className="city-grid">{cities.slice(0, 4).map((city, index) => (
            <Link href={`/cities/${city.slug}`} className={`city-card city-card-${index + 1}`} key={city.slug}>
              <span className="city-card-index">0{index + 1} / CITY GUIDE</span>
              <span className="city-card-title">{city.name}<ArrowUpRight size={19} /></span>
              <span className="city-card-line">{city.line}</span>
            </Link>
          ))}</div>
        </div>
      </section>

      <section className="section verify-section">
        <div className="container verify-home-grid">
          <div className="verify-home-intro">
            <div className="eyebrow"><ShieldCheck size={15} /> A little diligence goes a long way</div>
            <h2 className="h2">Good decisions<br />start with <span className="text-accent">good questions.</span></h2>
            <p>Recognition, eligibility, fees and visa rules can change. Before you commit or pay, check each detail with the university and the relevant official authority.</p>
            <Link href="/verify" className="text-link">How to verify information <ArrowRight size={16} /></Link>
            <div className="verify-proof"><UsersRound size={17} /><span>For students and the people supporting them.</span></div>
          </div>
          <VerifyPanel />
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div className="closing-cta-mark"><HeartHandshake size={25} /></div>
          <div><div className="eyebrow eyebrow-light">Your plans, your pace</div><h2>Curious about what comes next?</h2><p>Explore the options. Ask the right questions. Take it one step at a time.</p></div>
          <Link href="/contact" className="btn btn-white">Talk to a counsellor <ArrowRight size={16} /></Link>
          <MapPin className="closing-cta-decoration" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
