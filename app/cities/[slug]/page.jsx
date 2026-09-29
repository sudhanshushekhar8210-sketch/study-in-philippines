import { cities } from "@/data/site"; import { notFound } from "next/navigation";
export default async function City({ params }) {
 const { slug } = await params;
 const city = cities.find((item) => item.slug === slug);
 if (!city) return notFound();
 return <section className="section"><div className="container"><div className="pill">Philippine City Guide</div><h1 className="display mt-5">{city.name}</h1><p className="lead mt-5">{city.line}</p><div className="mt-10 grid-auto">{["Map","Universities","Accommodation","Food","Shopping","Transport","Hospitals","Videos","Photos","Student Experiences"].map((item) => <div className="card p-6" key={item}><h2 className="font-black">{item}</h2><p className="mt-2 text-sm text-slate-500">Add verified city information here.</p></div>)}</div></div></section>;
}
