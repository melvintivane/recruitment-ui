import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = ({breakpoint,visibility,margin}) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={`form-check form-switch pr-${margin} d-${breakpoint}-${visibility}`}>
      <input
        className="form-check-input"
        type="checkbox"
        id="languageSwitch"
        onChange={toggleLanguage}
        checked={language === "en"}
      />
      <label className="form-check-label" htmlFor="languageSwitch">
        {language === "pt" ? "PT" : "EN"}
      </label>
    </div>
  );
};

export default LanguageSwitcher;
