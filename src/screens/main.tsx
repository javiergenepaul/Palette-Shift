import { translate } from "@/i18n";
import { CardContainer } from ".";
import { MainLayout } from "./layout";

export const Main = () => {
  return (
    <MainLayout>
      <CardContainer
        title={translate("completeTitle")}
        description={translate("description")}
      >
        test
      </CardContainer>
    </MainLayout>
  );
};
