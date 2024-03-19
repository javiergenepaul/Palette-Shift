import { translate } from "@/i18n";
import { CardContainer, SettingsContent } from ".";
import { MainLayout } from "./layout";

export const Main = () => {
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
