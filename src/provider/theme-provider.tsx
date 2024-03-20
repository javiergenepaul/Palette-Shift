import { Theme, useSettingsStore } from "@/stores";
import { useEffect } from "react";
import { ThemeProviderProps } from "./theme-provider-props";
import { useTranslation } from "react-i18next";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const { theme, setTheme, color, language } = useSettingsStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(
      "azure",
      "emerald",
      "golden",
      "sunset",
      "purple",
      "scarlet",
      "silver"
    );

    if (color) {
      root.classList.add(color);
    } else {
      // set default when color palette is empty
      root.classList.add("emerald");
    }
  }, [color]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme as string);
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("vite-ui-theme") as Theme | null;
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
    } else if (!storedTheme && "system" !== theme) {
      setTheme("system");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
