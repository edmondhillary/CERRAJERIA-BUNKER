import { business } from "../../../data/business.js";
import CTAButtons from "../CTAButtons/CTAButtons.jsx";
import "./GoogleMapsShowcase.scss";

export default function GoogleMapsShowcase({ variant = "lite" }) {
  return (
    <section className="mapsShowcase container">
      <div className="mapsShowcase__box surface">
        <div className="mapsShowcase__content">
          <h2 className="rule-red">Dónde estamos</h2>

          <p className="small">
            {business.address.full}. Atención personalizada, trabajos a domicilio
            y urgencias 24 hs.
          </p>

          <div className="mapsShowcase__badges">
            <span className="badge">Moreno 492</span>
            <span className="badge">Rosario</span>
            <span className="badge">Local real</span>
          </div>

          <div className="mapsShowcase__actions">
            <CTAButtons />
          </div>
        </div>

        <div className="mapsShowcase__media">
          {variant === "embed" ? (
            <iframe
              title="Mapa Cerrajería Bunker"
              src={business.maps.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <a
              href={business.maps.query}
              target="_blank"
              rel="noreferrer"
              className="mapsShowcase__lite"
            >
              <img
                src="/images/brand/mapa-bunker.webp"
                alt="Ubicación Cerrajería Bunker Rosario"
                className="mapsShowcase__mapImage"
              />

              <div className="mapsShowcase__liteInner">
                <div className="mapsShowcase__liteTitle">
                  Moreno 492, Rosario
                </div>

                <div className="small">
                  Abrir ubicación en Google Maps
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}