// FILE: src/app/AppRouter.jsx
import { Navigate, useRoutes } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import Services from "../pages/Services/Services.jsx";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail.jsx";

import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import FAQ from "../pages/FAQ/FAQ.jsx";

import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import CookiesPolicy from "../pages/CookiesPolicy/CookiesPolicy.jsx";
import TermsOfUse from "../pages/TermsOfUse/TermsOfUse.jsx";

import NotFound from "../pages/NotFound/NotFound.jsx";

const appRoutes = [
  { path: "/", element: <Home /> },

  // Hub + servicios SEO
  { path: "/servicios", element: <Services /> },
  { path: "/servicios/:serviceSlug", element: <ServiceDetail /> },

  // Confianza / contacto
  { path: "/sobre-nosotros", element: <About /> },
   
  { path: "/contacto", element: <Contact /> },
  { path: "/preguntas-frecuentes", element: <FAQ /> },

  // Legales
  { path: "/legal/privacidad", element: <PrivacyPolicy /> },
  { path: "/legal/cookies", element: <CookiesPolicy /> },
  { path: "/legal/terminos", element: <TermsOfUse /> },

  // 404
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <Navigate to="/404" replace /> }
];

export default function AppRouter() {
  return useRoutes(appRoutes);
}
