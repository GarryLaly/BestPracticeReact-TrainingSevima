
import manual_language from '../config/manual_language';

export const changeLanguage = (currentLanguage, setCurrentLanguage) => {
  // const newLanguage = i18n.language === "en" ? "id" : "en";
  // i18n.changeLanguage(newLanguage);

  const newLanguage = currentLanguage === "en" ? "id" : "en";
  setCurrentLanguage(newLanguage);
  localStorage.setItem('currentLanguage', newLanguage);
}

export const getLanguage = (currentLanguage, key) => {
  return currentLanguage === "en" ? manual_language.en[key] : manual_language.id[key];
}