import { Color, LanguageType } from "@/screens";
import { FontFamiltyType } from "@/screens/components/font-item";

export type Theme = "dark" | "light" | "system" | undefined;

export interface SettingStoreInterface {
  theme: Theme;
  font: FontFamiltyType;
  color: Color;
  language: LanguageType;
  setColor: (color: Color) => void;
  setFont: (font: FontFamiltyType) => void;
  getSystemTheme: () => string;
  getTheme: () => boolean;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: LanguageType) => void;
}

export const DEFAULT_LANGUAGE: LanguageType = "en";
export const THEME_LOCAL: string = "vite-ui-theme";
export const COLOR_LOCAL: string = "vite-ui-color";
export const FONT_LOCAL: string = "vite-ui-font";
export const LANG_LOCAL: string = "i18nextLng";
