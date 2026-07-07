type SectionHeadingProps = {
  label: string;
  title: string;
  text?: string;
};

export function SectionHeading({ label, title, text }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span>{label}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
