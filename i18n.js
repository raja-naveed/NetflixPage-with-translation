import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json'; 
import fn from './locales/fn.json'; 

const resources = {
  en: { translation: en }, 
  fn: { translation: fn }, 
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
