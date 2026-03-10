import { business } from "../../../data/business.js";
import "./TrustBar.scss";

export default function TrustBar() {
  return (
    <section className="trustBar container">
      <div className="trustBar__grid surface">

        <div className="trustBar__item">
          <div className="trustBar__icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 8v5l3 2M12 2a10 10 0 100 20 10 10 0 000-20z"/>
            </svg>
          </div>
          <div>
            <div className="trustBar__strong">{business.yearsExperience} años</div>
            <div className="small">de experiencia</div>
          </div>
        </div>

        <div className="trustBar__item">
          <div className="trustBar__icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 6v6l4 2M12 2a10 10 0 110 20A10 10 0 0112 2z"/>
            </svg>
          </div>
          <div>
            <div className="trustBar__strong">Urgencias</div>
            <div className="small">24 hs</div>
          </div>
        </div>

        <div className="trustBar__item">
          <div className="trustBar__icon">
            <svg viewBox="0 0 24 24">
              <path d="M3 11l9-8 9 8v10H3z"/>
            </svg>
          </div>
          <div>
            <div className="trustBar__strong">A domicilio</div>
            <div className="small">en Rosario</div>
          </div>
        </div>

        <div className="trustBar__item">
          <div className="trustBar__icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z"/>
            </svg>
          </div>
          <div>
            <div className="trustBar__strong">Honestidad</div>
            <div className="small">trato directo</div>
          </div>
        </div>

      </div>
    </section>
  );
}