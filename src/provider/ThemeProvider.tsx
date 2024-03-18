import { useEffect } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  //   const { theme, setTheme, color } = useSettingsStore();
  //   useEffect(() => {
  //     if (DEV_MODE && DEV_MODE === "development") {
  //       const root = window.document.documentElement;
  //       root.classList.add("debug-screens");
  //     }
  //   }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    // reset first
    root.classList.remove(
      "azure",
      "emerald",
      "golden",
      "sunset",
      "purple",
      "scarlet",
      "silver"
    );

    root.classList.add("silver");

    // if (color) {
    //   root.classList.add(color);
    // } else {
    //   // set default when color palette is empty
    //   root.classList.add("emerald");
    // }
  }, []);

  //   useEffect(() => {
  //     const root = window.document.documentElement;
  //     root.classList.remove("light", "dark");

  //     if (theme === "system") {
  //       const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
  //         .matches
  //         ? "dark"
  //         : "light";
  //       root.classList.add(systemTheme);
  //       return;
  //     }

  //     root.classList.add(theme as string);
  //   }, [theme]);

  //   useEffect(() => {
  //     const storedTheme = localStorage.getItem(storageKey) as Theme | null;
  //     if (storedTheme && storedTheme !== theme) {
  //       setTheme(storedTheme);
  //     } else if (!storedTheme && defaultTheme !== theme) {
  //       setTheme(defaultTheme);
  //     }
  //   }, []);

  return <>{children}</>;
};
