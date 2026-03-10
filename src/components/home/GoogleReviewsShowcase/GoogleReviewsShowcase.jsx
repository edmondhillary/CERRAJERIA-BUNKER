import "./GoogleReviewsShowcase.scss";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Bunker+cerrajer%C3%ADa/@-32.941,-60.650,17z";

const GOOGLE_MAPS_LOGO = "/images/brand/google-maps-logo.png";

const REVIEW_RATING = "4.4";
const REVIEW_COUNT = 37;

const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: "Tomas Fragapane",
    rating: 5,
    text: "Excelente servicio, atención y precio. Muy recomendable Juan José.",
    highlight: "Servicio, atención y precio",
    type: "google",
    href: GOOGLE_REVIEWS_URL
  },
  {
    id: 2,
    name: "Ignacio Carletti",
    rating: 5,
    text: "Muy buena atención, excelentes detalles y predisposición para resolver una urgencia.",
    highlight: "Resolución de urgencia",
    type: "google",
    href: GOOGLE_REVIEWS_URL
  },
  {
    id: 3,
    name: "Paola",
    rating: 5,
    text: "No puedo estar más satisfecha con los servicios de esta cerrajería. El cerrajero que me atendió fue excepcional desde el primer momento. Fue extremadamente amable y profesional.",
    highlight: "Amable y profesional",
    type: "google",
    href: GOOGLE_REVIEWS_URL
  },
  {
    id: 4,
    name: "Ana Rodríguez",
    rating: 5,
    text: "Nos ayudaron con un cambio de cerradura en casa y la atención fue muy clara y rápida. Se nota la experiencia y el trato directo.",
    highlight: "Testimonio destacado web",
    type: "web",
    href: "/contacto"
  }
];

function Stars({ count = 5 }) {
  return (
    <div className="bunkerReviews__stars" aria-label={`${count} estrellas`}>
      {Array.from({ length: count }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8-4.2-4.1 5.8-.8L12 3.6Z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviewsShowcase() {
  return (
    <section className="bunkerReviews page-section">
      <div className="container">
        <div className="bunkerReviews__head">
          <div className="bunkerReviews__intro">
            <div className="bunkerReviews__meta">
              <span className="bunkerReviews__googleBadge">
                <img
                  src={GOOGLE_MAPS_LOGO}
                  alt="Google Maps"
                  className="bunkerReviews__googleIcon"
                />
                <span>Google Maps</span>
              </span>

              <span className="badge">Opiniones reales</span>
            </div>

            <h2 className="rule-red">Opiniones de clientes</h2>

            <p className="small">
              Reseñas y opiniones que ayudan a transmitir algo clave para una
              cerrajería: rapidez, confianza, buen trato y respuesta real cuando
              hay una urgencia.
            </p>
          </div>

          <div className="bunkerReviews__summary surface">
            <div className="bunkerReviews__summaryTop">
              <div className="bunkerReviews__summaryBrand">
                <img
                  src={GOOGLE_MAPS_LOGO}
                  alt="Google Maps"
                  className="bunkerReviews__summaryLogo"
                />
              </div>

              <div className="bunkerReviews__summaryMain">
                <div className="bunkerReviews__score">{REVIEW_RATING}</div>

                <div>
                  <Stars count={5} />
                  <div className="bunkerReviews__summaryText">
                    Basado en {REVIEW_COUNT} opiniones en Google
                  </div>
                </div>
              </div>
            </div>

            <a
              className="btn btn--ghost"
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver ficha en Google
            </a>
          </div>
        </div>

        <div className="bunkerReviews__grid">
          {GOOGLE_REVIEWS.map((review) => (
            <a
              key={review.id}
              href={review.href}
              target={review.type === "google" ? "_blank" : undefined}
              rel={review.type === "google" ? "noopener noreferrer" : undefined}
              className="bunkerReviews__card surface"
            >
              <div className="bunkerReviews__cardTop">
                <div className="bunkerReviews__avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </div>

                <div className="bunkerReviews__person">
                  <div className="bunkerReviews__name">{review.name}</div>
                  <Stars count={review.rating} />
                </div>
              </div>

              <p className="bunkerReviews__text">“{review.text}”</p>

              <div className="bunkerReviews__footer">
                <span className="bunkerReviews__tag">{review.highlight}</span>

                <span
                  className={`bunkerReviews__source ${
                    review.type === "web" ? "is-web" : ""
                  }`}
                >
                  {review.type === "google" ? "Google Maps" : "Testimonio web"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}