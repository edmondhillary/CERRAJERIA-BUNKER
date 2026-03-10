import CTAButtons from "../../common/CTAButtons/CTAButtons.jsx";
import { business } from "../../../data/business.js";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="badge">Urgencias 24 hs · Rosario</span>

          <h1>
            Cerrajería en Rosario con {business.yearsExperience} años de experiencia
          </h1>

          <p className="hero__text">
            Atención personalizada, trabajos a domicilio, duplicado de llaves
            en el acto, cajas fuertes y cerraduras computadas. Soluciones al detalle con honestidad y respeto.
          </p>

          <CTAButtons />

          <div className="hero__meta small">
            {business.address.street}, Rosario · Tel: {business.phone.display}
          </div>
        </div>

        <div className="hero__visual surface">
          <div className="hero__poster">
            <div className="hero__collage">

              <div className="hero__collageItem">
                <img
                  src="/images/services/card-cerrajeria-hogar.webp"
                  alt="Cambio y reparación de cerraduras para el hogar en Rosario"
                  className="hero__collageImage"
                  loading="eager"
                />
              </div>

              <div className="hero__collageItem">
                <img
                  src="/images/services/card-duplicado-llaves.webp"
                  alt="Duplicado de llaves en el acto en Rosario"
                  className="hero__collageImage"
                  loading="eager"
                />
              </div>

              <div className="hero__collageItem">
                <img
                  src="/images/services/card-puertas-blindadas.webp"
                  alt="Instalación de cerraduras computadas y digitales en Rosario"
                  className="hero__collageImage"
                  loading="eager"
                />
              </div>

              <div className="hero__overlay" />
            </div>

            <div className="hero__posterContent">
              <div className="hero__posterTop">CERRAJERÍA</div>
              <div className="hero__posterRule" />
              <div className="hero__posterMain">BUNKER</div>
              <div className="hero__posterBottom">
                Moreno 492 · Rosario · Urgencias 24 hs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}