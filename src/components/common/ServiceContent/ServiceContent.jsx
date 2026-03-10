import "./ServiceContent.scss";

export default function ServiceContent({ service }) {
  return (
    <section className="serviceContent">
      <div className="serviceContent__grid">
        <article className="serviceContent__box surface">
          <h2 className="rule-red">Qué hacemos</h2>
          <ul>
            {service.whatWeDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="serviceContent__box surface">
          <h2 className="rule-red">Cuándo conviene</h2>
          <ul>
            {service.whenItHelps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="serviceContent__box surface">
          <h2 className="rule-red">Cómo trabajamos</h2>
          <ol>
            {service.howWeWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className="serviceContent__box surface">
          <h2 className="rule-red">SEO del servicio</h2>
          <p className="small">
            <strong>Objetivo:</strong> {service.seo.objective}
          </p>
          <p className="small">
            <strong>Keyword principal:</strong> {service.seo.primaryKeyword}
          </p>
          <p className="small">
            <strong>Keywords secundarias:</strong> {service.seo.secondaryKeywords.join(", ")}
          </p>
        </article>
      </div>
    </section>
  );
}