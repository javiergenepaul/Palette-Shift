import { create } from "zustand";
import {
  SettingStoreInterface,
  THEME_LOCAL,
  Theme,
  COLOR_LOCAL,
  Color,
  FONT_LOCAL,
  FontType,
  DEFAULT_LANGUAGE,
  LanguageType,
  LANG_LOCAL,
} from "./settings-store-props";

export const useSettingsStore = create<SettingStoreInterface>((set, get) => ({
  theme: localStorage.getItem(THEME_LOCAL) as Theme | undefined,
  color: localStorage.getItem(COLOR_LOCAL) as Color | "emerald",
  font: localStorage.getItem(FONT_LOCAL) as FontType | "inter",
  language:
    (localStorage.getItem(LANG_LOCAL) as LanguageType) || DEFAULT_LANGUAGE,
  setLanguage: (language: LanguageType) => set({ language }),
  setColor: (color: Color) => {
    localStorage.setItem(COLOR_LOCAL, color as string);
    set({ color });
  },
  setFont: (font: FontType) => {
    localStorage.setItem(FONT_LOCAL, font);
    set({ font });
  },
  getSystemTheme: (): string => {
    if (get().theme === undefined || get().theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      return systemTheme;
    }
    return get().theme as string;
  },
  getTheme: (): boolean => {
    const currentTheme = get().theme;
    if (currentTheme === "system") {
      return get().getSystemTheme() !== "light";
    } else {
      return currentTheme === "dark";
    }
  },
  setTheme: (theme: Theme) => {
    localStorage.setItem(THEME_LOCAL, theme as string);
    set({ theme });
  },
}));
