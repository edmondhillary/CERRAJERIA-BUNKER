import SectionHeading from "../../common/SectionHeading/SectionHeading.jsx";
import "./WhyChooseUs.scss";

const reasons = [
  {
    title: "42 años de experiencia",
    text: "Oficio, conocimiento y soluciones reales para problemas del día a día y urgencias."
  },
  {
    title: "Atención personalizada",
    text: "Trato directo, sin vueltas y con asesoramiento claro."
  },
  {
    title: "Rapidez",
    text: "Cuando necesitás resolver algo urgente, respondemos."
  },
  {
    title: "A domicilio",
    text: "Vamos al lugar cuando el trabajo lo necesita."
  },
  {
    title: "Stock real",
    text: "Más de 60 modelos de cerraduras y variedad de herrajes."
  },
  {
    title: "Confianza local",
    text: "Local físico en Rosario y trayectoria de años."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="whyChooseUs container page-section">
      <SectionHeading
        title="Por qué elegirnos"
        subtitle="Experiencia, confianza y rapidez para resolver lo que necesitás."
      />

      <div className="whyChooseUs__grid">
        {reasons.map((reason) => (
          <article key={reason.title} className="whyChooseUs__card surface">
            <h3>{reason.title}</h3>
            <p className="small">{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}