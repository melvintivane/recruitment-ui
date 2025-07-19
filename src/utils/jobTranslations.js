export const translateJobType = (type) => {
  const translations = {
    FULL_TIME: "Tempo Integral",
    PART_TIME: "Meio Período",
    FIXED_TERM: "Determinado",
    INTERNSHIP: "Estágio",
    FREELANCE: "Freelance",
  };

  return translations[type] || "N/A";
};


export const translateCareerLevel = (level) => {
  const translations = {
    TRAINEE: "Estagiário",
    JUNIOR: "Júnior",
    MID: "Pleno",
    SENIOR: "Sênior",
    HEAD: "Líder/Chefe"
  };
  
  return translations[level] || "N/A";
};

export const translateSector = (sector) => {
  const translations = {
    PRIVATE: "Privado",
    PUBLIC: "Público",
    ONG: "ONG"
  };
  
  return translations[sector] || "N/A";
};
