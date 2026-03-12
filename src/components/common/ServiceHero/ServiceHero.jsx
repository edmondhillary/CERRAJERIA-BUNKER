import CTAButtons from "../CTAButtons/CTAButtons.jsx";
import "./ServiceHero.scss";

export default function ServiceHero({ service }) {
  return (
    <section className="serviceHero surface">
      <div className="serviceHero__content">
        <span className="serviceHero__badge">
          Rosario · A domicilio · Urgencias 24 hs
        </span>

        <h1 className="serviceHero__title">{service.h1}</h1>

        <p className="serviceHero__intro">{service.intro}</p>

        <div className="serviceHero__actions">
          <CTAButtons />
        </div>
      </div>

      <div className="serviceHero__visual">
        <img
          src={service.heroImage}
          alt={service.name}
          className="serviceHero__image"
          loading="lazy"
        />
      </div>
    </section>
  );
}