import { Link } from "react-router-dom";
import "./FAQPreview.scss";

const featuredFaqs = [
  {
    q: "¿Atienden urgencias las 24 horas?",
    a: "Sí. Si necesitás una respuesta rápida, lo mejor es llamar directamente para coordinar la atención."
  },
  {
    q: "¿Hacen trabajos a domicilio en Rosario?",
    a: "Sí. Realizamos trabajos a domicilio en Rosario y alrededores según el tipo de servicio."
  },
  {
    q: "¿Hacen duplicado de llaves en el acto?",
    a: "Sí. Hacemos duplicado de llaves en el acto para distintos tipos de llaves y necesidades."
  },
  {
    q: "¿Trabajan con cerraduras computadas?",
    a: "Sí. Asesoramos e instalamos cerraduras computadas y digitales para hogares y comercios."
  }
];

function FAQIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 18h.01M9.1 9a3 3 0 115.3 1.9c-.7.7-1.5 1.2-1.9 2.1-.2.4-.3.8-.3 1.5M12 22a10 10 0 100-20 10 10 0 000 20Z" />
    </svg>
  );
}

export default function FAQPreview() {
  return (
    <section className="faqPreview container page-section">
      <div className="faqPreview__head">
        <div>
          <span className="badge">Preguntas frecuentes</span>
          <h2 className="rule-red">Dudas comunes antes de llamar</h2>
          <p className="small faqPreview__intro">
            Algunas respuestas rápidas sobre urgencias, atención a domicilio,
            llaves, cerraduras y servicios de cerrajería en Rosario.
          </p>
        </div>

        <div className="faqPreview__cta">
          <Link to="/preguntas-frecuentes" className="btn btn--ghost">
            Ver más preguntas frecuentes
          </Link>
        </div>
      </div>

      <div className="faqPreview__grid">
        {featuredFaqs.map((item, index) => (
          <article key={`${item.q}-${index}`} className="faqPreview__card surface">
            <div className="faqPreview__question">
              <span className="faqPreview__icon">
                <FAQIcon />
              </span>
              <h3>{item.q}</h3>
            </div>

            <p className="small">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}