import { twMerge } from "tailwind-merge";
import { MainLayoutInterface } from "./main-layout-props";
import { useTranslation } from "react-i18next";
import { useSettingsStore } from "@/stores";

export const MainLayout = (props: MainLayoutInterface) => {
  const { children } = props;
  const { i18n } = useTranslation();
  const { font } = useSettingsStore();

  return (
    <div
      dir={i18n.dir()}
      className={twMerge(
        "px-8 py-10 mx-auto min-w-screen h-dvh select-none",
        `font-${font}`
      )}
    >
      {children}
    </div>
  );
};
