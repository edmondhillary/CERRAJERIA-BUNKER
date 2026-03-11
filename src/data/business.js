// FILE: src/data/business.js
export const business = {
  name: "Cerrajería Bunker",
  yearsExperience: 42,

  address: {
    street: "Moreno 492",
    city: "Rosario",
    region: "Santa Fe",
    country: "AR"
  },

  phone: {
    raw: "3416432266",
    display: "341 643-2266",
    telE164: "+543416432266"
  },

  whatsapp: {
    phoneDigits: "5493416432266",
    defaultMessage:
      "Hola, escribo desde la web de Cerrajería Bunker. Necesito una consulta."
  },

  valueProps: [
    "Honestidad",
    "Atención personalizada",
    "Trabajos a domicilio",
    "Urgencias 24 hs"
  ],

  maps: {
    query:
      "https://www.google.com/maps/search/?api=1&query=Moreno%20492%2C%20Rosario%2C%20Santa%20Fe"
  },

  // Para cuando definas dominio real en Vercel
  siteUrl: "https://cerrajeriarosariocentro.com"
};
