import "./SectionHeading.scss";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="sectionHeading">
      <h2 className="rule-red">{title}</h2>
      {subtitle ? <p className="small sectionHeading__subtitle">{subtitle}</p> : null}
    </div>
  );
}