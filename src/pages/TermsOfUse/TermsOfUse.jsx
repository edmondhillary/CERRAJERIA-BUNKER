import PageSEO from "../../hooks/usePageSEO.jsx";
import "./TermsOfUse.scss";

export default function TermsOfUse() {
  return (
    <div className="container legalPage">
      <PageSEO
        title="Términos de uso"
        description="Términos de uso de Cerrajería Bunker."
      />

      <section className="legalPage__box surface">
        <h1>Términos de uso</h1>
        <p className="small">
          Texto inicial de términos de uso. Después lo dejás cerrado legalmente.
        </p>
      </section>
    </div>
  );
}