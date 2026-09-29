import { notFound } from "next/navigation"; import { courses } from "@/data/site"; import Link from "next/link";
export default async function CoursePage({ params }) {
 const { slug } = await params;
 const course = courses.find((item) => item.slug === slug);
 if (!course) return notFound();
 return <section className="section"><div className="container"><span className="pill">{course.category}</span><h1 className="display mt-5 max-w-4xl">{course.icon} {course.title}</h1><p className="lead mt-6 max-w-3xl">{course.description}</p><div className="mt-10 grid gap-5 md:grid-cols-2">{["Programme overview","Duration & structure","Admission requirements","International student requirements","Training / clinical exposure","Licensing & regulatory information","Indicative costs","Official institution links"].map((item) => <div className="card p-6" key={item}><h2 className="font-black text-lg">{item}</h2><p className="mt-2 text-sm text-slate-500">Add verified, current information here with source, date and official link.</p></div>)}</div><div className="mt-8 rounded-2xl bg-amber-50 p-5 text-sm text-amber-950">Information changes. Verify current requirements with the relevant Philippine authority, university and — where applicable — Indian regulator before admission.</div><Link href="/verify" className="btn btn-primary mt-8">Verify Before You Join</Link></div></section>;
}
