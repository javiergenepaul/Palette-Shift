import { MainLayoutInterface } from "./main-layout-props";
import { useTranslation } from "react-i18next";

export const MainLayout = (props: MainLayoutInterface) => {
  const { children } = props;
  const { i18n } = useTranslation();

  return (
    <div
      dir={i18n.dir()}
      className="px-8 py-10 mx-auto min-w-screen h-dvh select-none"
    >
      {children}
    </div>
  );
};
