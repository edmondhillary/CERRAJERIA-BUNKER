import PageSEO from "../../hooks/usePageSEO.jsx";
import { faqItems } from "../../data/faq.js";
import { buildFAQSchema } from "../../utils/schemaBuilders.js";
import "./FAQ.scss";

function FAQIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 18h.01M9.1 9a3 3 0 115.3 1.9c-.7.7-1.5 1.2-1.9 2.1-.2.4-.3.8-.3 1.5M12 22a10 10 0 100-20 10 10 0 000 20Z" />
    </svg>
  );
}

export default function FAQ() {
  return (
    <div className="container faqPage">
      <PageSEO
        title="FAQ | Preguntas frecuentes de cerrajería en Rosario"
        description="Respuestas a preguntas frecuentes sobre urgencias 24 hs, trabajos a domicilio, duplicado de llaves, cerraduras, herrajes, cajas fuertes y más en Rosario."
        schema={buildFAQSchema({ items: faqItems })}
      />

      <section className="faqPage__hero surface">
        <span className="badge">FAQ · Cerrajería Bunker</span>

        <h1>Preguntas frecuentes</h1>

        <p className="faqPage__intro small">
          Acá vas a encontrar respuestas claras sobre urgencias, trabajos a
          domicilio, duplicado de llaves, cerraduras, herrajes, puertas
          blindadas, cajas fuertes y atención en Rosario.
        </p>
      </section>

      <section className="faqPage__grid">
        {faqItems.map((item, index) => (
          <details key={`${item.q}-${index}`} className="faqPage__item surface">
            <summary className="faqPage__question">
              <span className="faqPage__questionIcon">
                <FAQIcon />
              </span>
              <span>{item.q}</span>
            </summary>

            <div className="faqPage__answer">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}