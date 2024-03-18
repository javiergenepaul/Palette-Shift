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

export interface SettingStoreInterface {
  theme: Theme;
  font: FontType;
  color: Color;
  setColor: (color: Color) => void;
  setFont: (font: FontType) => void;
  getSystemTheme: () => string;
  getTheme: () => boolean;
  setTheme: (theme: Theme) => void;
}

export const THEME_LOCAL: string = "vite-ui-theme";
export const COLOR_LOCAL: string = "vite-ui-color";
export const FONT_LOCAL: string = "vite-ui-font";
