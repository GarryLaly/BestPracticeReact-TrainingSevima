import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    id: {
      translations: {
        change_language: 'Ganti Bahasa',
        news: "Berita",
        list: "Daftar",
      }
    },
    en: {
      translations: {
        change_language: 'Change Language',
        news: "News",
        list: "List",
      }
    },
  },
  fallbackLng: localStorage.getItem("currentLanguage") || "id",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;