import translationEn from "./locales/english/translations.json";
import translationFr from "./locales/french/translations.json";
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
      translation: translationEn,
    },
    fr: {
      translation: translationFr,
    },
  };

i18n
  .use(LanguageDetector)
  .use (initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    //Detects and caches a cookie from the language provided
    interpolation: {
      escapeValue: false
    },
    resources
    })

export default i18n;
