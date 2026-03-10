export function buildWhatsAppUrl({ phoneDigits, message }) {
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${phoneDigits}?text=${text}`;
}