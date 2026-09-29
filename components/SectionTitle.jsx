export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-3xl">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="h2 mt-3">{title}</h2>
      {description && <p className="lead mt-4">{description}</p>}
    </div>
  );
}
