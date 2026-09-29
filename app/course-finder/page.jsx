"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { courses } from "@/data/site";
import { SectionTitle } from "@/components/SectionTitle";

const categories = ["All areas", ...new Set(courses.map((course) => course.category))];

export default function Finder() {
  const [category, setCategory] = useState("All areas");
  const [search, setSearch] = useState("");
  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory = category === "All areas" || course.category === category;
      const matchesSearch = !query || `${course.title} ${course.category} ${course.description}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <section className="section explorer-page">
      <div className="container">
        <SectionTitle
          eyebrow="A thoughtful starting point"
          title={<>Find a course<br /><span className="text-accent">that feels like you.</span></>}
          description="Explore the programme areas in this guide. Search by interest or browse a subject area to see what sparks your curiosity."
        />
        <div className="explorer-controls">
          <label className="explorer-search">
            <span className="sr-only">Search courses</span>
            <Search size={17} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try “design”, “healthcare” or “AI”" />
          </label>
          <label className="explorer-category">
            <SlidersHorizontal size={16} />
            <span className="sr-only">Filter by subject area</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
        <p className="explorer-result-count" aria-live="polite">{results.length} {results.length === 1 ? "area" : "areas"} to explore</p>
        {results.length > 0 ? (
          <div className="grid-auto course-grid">
            {results.map((course) => (
              <Link href={`/courses/${course.slug}`} className="course-card" key={course.slug}>
                <div className="course-card-top"><span className="pill">{course.category}</span><ArrowRight className="explorer-card-arrow" size={16} /></div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <span className="course-card-link">Explore programme <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="explorer-empty"><Search size={21} /><h2>No matching courses yet</h2><p>Try another keyword or choose a different subject area.</p><button type="button" className="btn btn-light" onClick={() => { setSearch(""); setCategory("All areas"); }}>Clear filters</button></div>
        )}
        <p className="explorer-disclaimer">Course information is a starting point only. Confirm programme availability and entry requirements directly with the institution.</p>
      </div>
    </section>
  );
}
