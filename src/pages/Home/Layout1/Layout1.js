import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
const Section = React.lazy(() => import('../Layout1/Section'));
const Home = React.lazy(() => import('../Home'));

const Layout1 = () => {
  const { language } = useLanguage();
  document.title = language === "pt" ? "Início" : "Home";
  
  return (
    <div>
      <Section />
      <Home />
    </div>
  );
};

export default Layout1;
