// FILE: src/app/App.jsx

import MainLayout from "../components/layout/MainLayout/MainLayout.jsx";
import useAnalytics from "../hooks/useAnalytics.jsx";
import AppRouter from "./AppRouter.jsx";

export default function App() {

  // hook para trackear cambios de ruta en Google Analytics
  useAnalytics();

  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}