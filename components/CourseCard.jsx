import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, Plane, Ship, Stethoscope, Cpu, Hotel, GraduationCap } from "lucide-react";

const courseIcons = {
  medicine: Stethoscope,
  nursing: Stethoscope,
  aviation: Plane,
  maritime: Ship,
  management: BriefcaseBusiness,
  "ai-it": Cpu,
  engineering: Building2,
  hospitality: Hotel,
};

export function CourseCard({ course, index = 0 }) {
  const Icon = courseIcons[course.slug] || GraduationCap;

  return (
    <Link href={`/courses/${course.slug}`} className="course-card" style={{ "--card-index": index }}>
      <div className="course-card-top">
        <span className="course-card-icon"><Icon size={20} strokeWidth={1.7} /></span>
        <span className="pill">{course.category}</span>
      </div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <span className="course-card-link">Explore programme <ArrowRight size={14} /></span>
    </Link>
  );
}
