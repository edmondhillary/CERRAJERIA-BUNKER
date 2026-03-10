import PageSEO from "../../hooks/usePageSEO.jsx";
import CTAButtons from "../../components/common/CTAButtons/CTAButtons.jsx";
import { business } from "../../data/business.js";
import "./About.scss";

export default function About() {
  return (
    <div className="container aboutPage">
      <PageSEO
        title="Cerrajería Bunker en Rosario | 42 años de experiencia"
        description="Más de 42 años de experiencia en Rosario. Honestidad, atención personalizada, trabajos a domicilio y urgencias 24 hs."
      />

      <section className="aboutPage__hero surface">
        <div className="aboutPage__heroContent">
          <h1>
            Más de {business.yearsExperience} años cuidando la seguridad de Rosario
          </h1>

          <p className="small">
            Cerrajería Bunker es un negocio con trayectoria, atención directa y
            experiencia real. Nos eligen por la honestidad, el trato personalizado
            y la rapidez para resolver.
          </p>

          <CTAButtons />
        </div>

        <div className="aboutPage__heroImage">
          <img
            src="/images/brand/cerrajero-bunker.png"
            alt="Cerrajero de Cerrajería Bunker trabajando en Rosario"
            loading="lazy"
          />
        </div>
      </section>

      <section className="aboutPage__grid page-section">
        <article className="aboutPage__card surface">
          <h2 className="rule-red">Nuestra forma de trabajar</h2>
          <p className="small">
            Escuchamos el problema, evaluamos la mejor opción y te damos una
            solución clara. Sin vueltas, sin promesas vacías y con oficio.
          </p>
        </article>

        <article className="aboutPage__card surface">
          <h2 className="rule-red">Qué nos diferencia</h2>
          <ul>
            <li>Atención personalizada</li>
            <li>Experiencia real</li>
            <li>Urgencias 24 hs</li>
            <li>Más de 40 años de experiencia</li>
            <li>Trabajos a domicilio</li>
            <li>Más de 60 modelos de cerraduras en stock</li>
          </ul>
        </article>
      </section>
    </div>
  );
}