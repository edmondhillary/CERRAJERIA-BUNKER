// FILE: src/app/App.jsx
import MainLayout from "../components/layout/MainLayout/MainLayout.jsx";
import AppRouter from "./AppRouter.jsx";

export default function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}
