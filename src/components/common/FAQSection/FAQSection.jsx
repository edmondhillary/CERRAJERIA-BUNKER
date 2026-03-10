import "./FAQSection.scss";

export default function FAQSection({ items = [] }) {
  return (
    <section className="faqSection container">
      <div className="faqSection__grid">
        {items.map((item, index) => (
          <details key={`${item.q}-${index}`} className="faqSection__item surface">
            <summary className="faqSection__question">{item.q}</summary>
            <div className="faqSection__answer small">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}