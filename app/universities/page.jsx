"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { universities } from "@/data/site";
import { SectionTitle } from "@/components/SectionTitle";
import { UniversityCard } from "@/components/UniversityCard";

const cities = ["All cities", ...new Set(universities.map((university) => university.city))];

export default function Universities() {
  const [city, setCity] = useState("All cities");
  const [search, setSearch] = useState("");
  const results = useMemo(() => {
    const query = search.trim().toLowerCase();
    return universities.filter((university) => {
      const matchesCity = city === "All cities" || university.city === city;
      const matchesSearch = !query || `${university.name} ${university.city} ${university.tags.join(" ")}`.toLowerCase().includes(query);
      return matchesCity && matchesSearch;
    });
  }, [city, search]);

  return (
    <section className="section explorer-page">
      <div className="container">
        <SectionTitle
          eyebrow="Explore the directory"
          title={<>Find a place<br /><span className="text-accent">to call your own.</span></>}
          description="Browse the directory examples by city or search the listed subjects. Treat each listing as a starting point and verify details with the institution."
        />
        <div className="explorer-controls">
          <label className="explorer-search">
            <span className="sr-only">Search universities</span>
            <Search size={17} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by institution, city or subject" />
          </label>
          <label className="explorer-category">
            <SlidersHorizontal size={16} />
            <span className="sr-only">Filter by city</span>
            <select value={city} onChange={(event) => setCity(event.target.value)}>
              {cities.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
        <p className="explorer-result-count" aria-live="polite">{results.length} {results.length === 1 ? "example" : "examples"} in the directory</p>
        {results.length > 0 ? (
          <div className="grid-auto university-grid">
            {results.map((university) => <UniversityCard key={university.slug} u={university} />)}
          </div>
        ) : (
          <div className="explorer-empty"><Search size={21} /><h2>No matching examples</h2><p>Try another search or select a different city.</p><button type="button" className="btn btn-light" onClick={() => { setSearch(""); setCity("All cities"); }}>Clear filters</button></div>
        )}
        <p className="explorer-disclaimer">The current listings are illustrative examples, not verified institutions. Confirm recognition, programmes and admission information with official sources.</p>
      </div>
    </section>
  );
}
