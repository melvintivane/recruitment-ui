import { createContext, useContext, useState } from "react";

// Criação do contexto
export const LanguageContext = createContext();

// Hook personalizado para facilitar o uso
export const useLanguage = () => useContext(LanguageContext);

// Provedor
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt"); // PT é padrão

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
