import { createContext, useContext, useEffect, useState } from "react";

// Criação do contexto
export const LanguageContext = createContext();

// Hook personalizado para facilitar o uso
export const useLanguage = () => useContext(LanguageContext);

// Provedor
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() =>{
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "pt"; 
  }); // PT é padrão


  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);


  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
