import { translate } from "@/i18n";
import { CardContainer, SettingsContent } from ".";
import { MainLayout } from "./layout";
import { useTranslation } from "react-i18next";

export const Main = () => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useTranslation();
  
  return (
    <MainLayout>
      <CardContainer
        title={translate("completeTitle")}
        description={translate("description")}
      >
        <SettingsContent />
      </CardContainer>
    </MainLayout>
  );
};
