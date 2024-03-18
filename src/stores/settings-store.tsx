import { create } from "zustand";

export type Theme = "dark" | "light" | "system" | undefined;
export type FontType = "inter" | "work-sans" | "poppins";
export type Color =
  | "azure"
  | "emerald"
  | "golden"
  | "sunset"
  | "lavender"
  | "scarlet"
  | "silver";

interface SettingStoreInterface {
  theme: Theme;
  font: FontType;
  color: Color;
  setColor: (color: Color) => void;
  setFont: (font: FontType) => void;
  getSystemTheme: () => string;
  getTheme: () => boolean;
  setTheme: (theme: Theme) => void;
}

const THEME_LOCAL: string = "vite-ui-theme";
const COLOR_LOCAL: string = "vite-ui-color";
const FONT_LOCAL: string = "vite-ui-font";

export const useSettingsStore = create<SettingStoreInterface>((set, get) => ({
  theme: localStorage.getItem(THEME_LOCAL) as Theme | undefined,
  color: localStorage.getItem(COLOR_LOCAL) as Color | "emerald",
  font: localStorage.getItem(FONT_LOCAL) as FontType | "inter",
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
