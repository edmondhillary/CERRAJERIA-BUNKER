import "./ServiceContent.scss";

export default function ServiceContent({ service }) {
  return (
    <section className="serviceContent page-section">
      <div className="serviceContent__grid">
        <article className="serviceContent__box surface">
          <h2 className="rule-red serviceContent__title">Qué hacemos</h2>
          <ul className="serviceContent__list">
            {service.whatWeDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="serviceContent__box surface">
          <h2 className="rule-red serviceContent__title">Cuándo conviene</h2>
          <ul className="serviceContent__list">
            {service.whenItHelps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="serviceContent__box surface">
          <h2 className="rule-red serviceContent__title">Cómo trabajamos</h2>
          <ol className="serviceContent__list serviceContent__list--ordered">
            {service.howWeWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className="serviceContent__box surface">
          <h2 className="rule-red serviceContent__title">Resumen del servicio</h2>

          <p className="serviceContent__text">{service.intro}</p>

          <div className="serviceContent__meta">
            <p className="serviceContent__metaItem">
              <strong>Servicio:</strong> {service.name}
            </p>

            <p className="serviceContent__metaItem">
              <strong>Zona:</strong> Rosario
            </p>

            <p className="serviceContent__metaItem">
              <strong>Atención:</strong> directa, clara y personalizada
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}