import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    supportedLngs: [
      "en",
      "fr",
      "de",
      "es",
      "pt",
      "ar",
      "zh",
      "ja",
      "ru",
      "it",
      "tr",
    ],
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    lng: 'en',
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
