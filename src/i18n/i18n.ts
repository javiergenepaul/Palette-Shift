import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { DEFAULT_LANGUAGE } from "@/stores";
import { EN, JA } from "./locale";

// Check local storage for preferred language
const preferredLanguage = localStorage.getItem("i18nextLng");

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: EN,
      },
      ja: {
        translation: JA,
      },
    },
  });

i18n.changeLanguage(
  preferredLanguage || navigator.language || DEFAULT_LANGUAGE
);

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof EN;
type TxKeyPath = RecursiveKeyOf<DefaultLocale>;
type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

export { i18n };
export type { TxKeyPath };
