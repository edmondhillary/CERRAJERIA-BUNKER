import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import CTAStickyMobile from "../../home/CTAStickyMobile/CTAStickyMobile.jsx";
import useScrollToTop from "../../../hooks/useScrollToTop.jsx";
import "./MainLayout.scss";

export default function MainLayout({ children }) {
  useScrollToTop();

  return (
    <div className="layout">
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
      <CTAStickyMobile />
    </div>
  );
}