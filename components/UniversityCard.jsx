import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function UniversityCard({ u }) {
  return (
    <Link href={`/universities/${u.slug}`} className="university-card">
      <div className="university-card-visual">
        <div>
          <span className="university-card-kicker">University directory · {u.city}</span>
          <span className="university-card-city">{u.city}</span>
        </div>
      </div>
      <div className="university-card-body">
        <h3>{u.name}</h3>
        <div className="university-card-tags">{u.tags.map((tag) => <span className="pill" key={tag}>{tag}</span>)}</div>
        <p>{u.note}</p>
        <span className="university-card-more">View profile <ArrowUpRight size={13} /></span>
      </div>
    </Link>
  );
}
