import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationRU from "./locales/ru/main.json";
import translationEN from "./locales/en/main.json";


export const initI18n = {
    resources: {
      ru: { translation: translationRU },
      en: { translation: translationEN },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  }

i18n
  .use(initReactI18next)
  .init(initI18n);

export const SUPPORTED_LANGUAGES = Object.keys(initI18n.resources);

export default i18n;